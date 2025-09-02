import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found");
      return NextResponse.json(
        {
          error: "Email configuration not available",
        },
        { status: 500 }
      );
    }

    const data = await req.json();
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "servicio@frontix.com.ar",
      subject: `New query from ${data.name}`,
      text: `Email: ${data.email}\nTeléfono: ${data.phone}\nMensaje:\n${data.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
