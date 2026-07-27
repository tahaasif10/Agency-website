import { NextResponse } from "next/server";
import { ContactFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body: Partial<ContactFormData> = await request.json();

    const { name, email, organization, service, message } = body;

    // 1. Basic server-side presence validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { error: "Please select a service interest." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed message (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // 2. Data Sanitization
    const sanitizedData: ContactFormData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      organization: organization ? organization.trim().slice(0, 100) : "",
      service: service.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
    };

    // 3. Log / Process Submission (In production: send via Resend / SendGrid / Webhook)
    console.log("[API /api/contact] New contact form submission received:", {
      timestamp: new Date().toISOString(),
      ...sanitizedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We have received your inquiry and will be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API /api/contact] Internal Server Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message. Please try again later." },
      { status: 500 }
    );
  }
}
