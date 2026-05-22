import { Resend } from "resend";
import { z } from "zod/v4";
import { siteConfig } from "@/data/config";

const schema = z.object({
  nom: z.string().min(2),
  email: z.email(),
  telephone: z.string().optional(),
  message: z.string().min(10),
  coursEssai: z.boolean().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: "Données invalides" }, { status: 400 });
  }

  const { nom, email, telephone, message, coursEssai } = parsed.data;
  const dest = process.env.CONTACT_EMAIL ?? siteConfig.email;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `Site ${siteConfig.name} <${siteConfig.emailFrom}>`,
    to: dest,
    replyTo: email,
    subject: coursEssai
      ? `[Cours d'essai] Message de ${nom}`
      : `[Contact] Message de ${nom}`,
    text: [
      `Nom : ${nom}`,
      `Email : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
      `Cours d'essai : ${coursEssai ? "Oui" : "Non"}`,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n"),
  });

  if (error) {
    console.error("[contact] resend error", error);
    return Response.json({ error: "Erreur d'envoi" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
