import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  email: string;
  gReCaptchaToken: string;
  name: string;
};

export async function POST(request: Request) {
  const { email, message, subject } = await request.json();
  if (!email || !subject || !message) {
    return NextResponse.json({
      status: 400,
      message: "Email and Message are required",
    });
  }

  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject,
      html: "<h1>Code warriors website</h1>",
    });

    console.log();
    return NextResponse.json({
      message: `Message sent: %s, ${info.messageId}`,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: error.message,
    });
  }
}
