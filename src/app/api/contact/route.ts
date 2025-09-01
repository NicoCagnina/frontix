import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "servicio@frontix.com.ar",
      subject: `Nueva consulta de ${data.name}`,
      text: `Email: ${data.email}\nTeléfono: ${data.phone}\nMensaje:\n${data.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
