// /api/contact.ts  — Node runtime serverless function (no @vercel/node)
// If TypeScript complains about types, switch this to /api/contact.js.

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: 'Method not allowed (use POST)' }));
    }

    // --- Env checks ---
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL =
      process.env.CONTACT_FROM_EMAIL || 'Leak Detector Contact <onboarding@resend.dev>';

    if (!RESEND_API_KEY) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY env var' }));
    }
    if (!CONTACT_TO_EMAIL) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Missing CONTACT_TO_EMAIL env var' }));
    }

    // --- Parse body robustly (supports Vercel Node & various clients) ---
    let body: any = req.body;
    if (!body) {
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString('utf8');
      try { body = JSON.parse(raw); } catch { body = {}; }
    }
    const { name, email, subject, message } = body || {};
    if (!name || !email || !subject || !message) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Missing fields: name, email, subject, message' }));
    }

    // --- Send via Resend REST API using fetch (no SDK needed) ---
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email, // REST API uses snake_case; Node SDK uses replyTo
        subject: `[Contact] ${subject}`,
        text:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Subject: ${subject}\n\n` +
          `${message}\n`,
      }),
    });

    const json = await r.json().catch(() => ({} as any));
    if (!r.ok) {
      res.statusCode = r.status || 502;
      return res.end(JSON.stringify({ error: json?.message || JSON.stringify(json) }));
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ ok: true }));
  } catch (err: any) {
    console.error('contact error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: err?.message || 'Unexpected error' }));
  }
}
