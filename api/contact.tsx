// /api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed (use POST)' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY env var' });
  }
  if (!process.env.CONTACT_TO_EMAIL) {
    return res.status(500).json({ error: 'Missing CONTACT_TO_EMAIL env var' });
  }

  // Body can be object or raw string depending on client/proxy—handle both
  let body: any = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { /* leave as string */ }
  }

  const { name, email, subject, message } = (body ?? {}) as {
    name?: string; email?: string; subject?: string; message?: string;
  };

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, subject, message)' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL || 'Leak Detector Contact <onboarding@resend.dev>';

  try {
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if ((result as any)?.error) {
      return res.status(502).json({ error: (result as any).error?.message || 'Resend send error' });
    }
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('contact error:', err);
    return res.status(500).json({ error: err?.message || 'Unexpected error' });
  }
}
