// /api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Env sanity checks
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY env var' });
  }
  if (!process.env.CONTACT_TO_EMAIL) {
    return res.status(500).json({ error: 'Missing CONTACT_TO_EMAIL env var' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = (req.body ?? {}) as {
      name?: string; email?: string; subject?: string; message?: string;
    };

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from =
      process.env.CONTACT_FROM_EMAIL || 'Leak Detector Contact <onboarding@resend.dev>';

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email, // user’s address
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    // Resend returns { id } or { error }
    if ((result as any)?.error) {
      return res.status(502).json({ error: (result as any).error?.message || 'Resend error' });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // Log for Vercel function logs
    console.error('contact error:', err);
    return res.status(500).json({ error: err?.message || 'Unexpected error' });
  }
}
