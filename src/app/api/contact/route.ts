import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "@/config/nodemailer";

type RequestBody = {
  email: string;
  gReCaptchaToken: string;
  name: string;
};

export async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { email, message, subject } = await request.body();
  if (!email || !subject || !message) {
    return response.status(400).json({
      status: 400,
      message: "Email and Message are required",
    });
  }
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject,
      html: "",
    });

    console.log("Message sent: %s", info.messageId);
    response.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    return response.status(400).json({
      status: 400,
      message: "error.message",
    });
  }
}
