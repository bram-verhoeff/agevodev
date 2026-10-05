import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    // Log received lead on server
    console.log("=== NIEUWE LEAD ONTVANGEN VIA AGEVODEV ===");
    console.log({
      tijdstip: new Date().toISOString(),
      naam: name,
      email: email,
      bedrijf: company || "Niet opgegeven",
      projectType: projectType,
      budget: budget || "Niet opgegeven",
      bericht: message,
    });

    // Optioneel: Resend e-mail integratie indien RESEND_API_KEY is ingesteld in .env
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "AgevoDev Leads <onboarding@resend.dev>",
            to: [siteConfig.email, "bramverhoeff@gmail.com"],
            subject: `Nieuwe aanvraag van ${name}: ${projectType}`,
            html: `
              <h2>Nieuwe aanvraag via AgevoDev</h2>
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Bedrijf:</strong> ${company || "Niet opgegeven"}</p>
              <p><strong>Projecttype:</strong> ${projectType}</p>
              <p><strong>Budget:</strong> ${budget || "Niet opgegeven"}</p>
              <hr />
              <p><strong>Bericht:</strong></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
          }),
        });
      } catch (err) {
        console.error("Fout bij doorsturen via Resend:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Bericht succesvol ontvangen.",
    });
  } catch (error) {
    console.error("Fout in contact route:", error);
    return NextResponse.json(
      { error: "Er is iets misgegaan bij het verwerken van je bericht." },
      { status: 500 }
    );
  }
}
