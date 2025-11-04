import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, subject, message } = req.body ?? {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Very light validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return res.status(400).json({ error: "Invalid email" });

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL!;

    await resend.emails.send({
      from,
      to,
      reply_to: email, // so you can reply straight to the sender
      subject: `[Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        ``,
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
