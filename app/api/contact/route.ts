import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/welcome";
import AdminNotificationEmail from "@/emails/admin-notification";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  interest: z.string().min(1),
  message: z.string().optional().nullable(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = formSchema.parse(body);

    let dbSuccess = false;
    let emailSuccess = false;

    // 1. Save to Database
    try {
      await prisma.contactMessage.create({
        data: {
          fullName: validatedData.fullName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          interest: validatedData.interest,
          message: validatedData.message || null,
        },
      });
      dbSuccess = true;
    } catch (dbError) {
      console.error("Database Error:", dbError);
    }

    // 2. Send Emails (Admin Notification & Welcome Email)
    try {
      // Admin Notification
      await resend.emails.send({
        from: `Trash of Fame <${process.env.ADMIN_EMAIL || "onboarding@resend.dev"}>`,
        to: [process.env.ADMIN_NOTIFICATION_EMAIL || "delivered@resend.dev"],

        subject: `New Contact Inquiry: ${validatedData.interest}`,

        react: AdminNotificationEmail({
          fullName: validatedData.fullName,
          email: validatedData.email,
          phone: validatedData.phone || undefined,
          interest: validatedData.interest,
          message: validatedData.message || undefined,
        }),
      });

      // Welcome Email to Sender
      await resend.emails.send({
        from: `Trash of Fame <${process.env.ADMIN_EMAIL || "onboarding@resend.dev"}>`,
        to: [validatedData.email],

        subject: "Welcome to the Movement",
        react: WelcomeEmail({ fullName: validatedData.fullName }),
      });

      emailSuccess = true;
    } catch (emailError) {
      console.error("Email Error:", emailError);
    }

    if (dbSuccess || emailSuccess) {
      return NextResponse.json(
        {
          success: true,
          message:
            dbSuccess && emailSuccess
              ? "Form submitted successfully."
              : "Form submitted.",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 },
    );
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
