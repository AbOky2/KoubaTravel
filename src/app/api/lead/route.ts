import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

const toEmail = process.env.TO_EMAIL || "issaokiabderamane@gmail.com";
const fromEmail =
  process.env.FROM_EMAIL || "Kouba Travel <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const {
      fullName,
      email,
      phone,
      contactPreference,
      tripType,
      from,
      to,
      departDate,
      returnDate,
      passengers,
      cabin,
      budget,
      notes,
    } = payload ?? {};

    const missing = [fullName, email, phone, from, to, departDate].some(
      (value) => !value
    );

    if (missing) {
      return NextResponse.json(
        { error: "Informations manquantes." },
        { status: 400 }
      );
    }

    const subject = `Nouvelle demande de vol - ${fullName}`;
    const text = `
Nouvelle demande de reservation de vol

Contact
- Nom: ${fullName}
- Email: ${email}
- Telephone: ${phone}
- Canal prefere: ${contactPreference || "Non precise"}

Vol
- Type: ${tripType || "Non precise"}
- Depart: ${from}
- Destination: ${to}
- Date depart: ${departDate}
- Date retour: ${returnDate || "Non precise"}

Preferences
- Passagers: ${passengers || "Non precise"}
- Classe: ${cabin || "Non precise"}
- Budget: ${budget || "Non precise"}
- Notes: ${notes || "Aucune"}
`;

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead email error", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer la demande." },
      { status: 500 }
    );
  }
}
