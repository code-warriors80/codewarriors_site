import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions, sendMessage } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/app/actions/contact";

type RequestBody = {
  email: string;
  gReCaptchaToken: string;
  name: string;
};

export async function POST(request: Request, res: NextApiResponse) {
  const data = (await request.json()) as FormData;
  // if (!email || !subject || !message) {
  //   return NextResponse.json({
  //     status: 400,
  //     message: "Email and Message are required",
  //   });
  // }

  try {
    console.log(data);
    const formData = request.body;
    const result = await sendMessage(data);
    return NextResponse.json({
      message: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: 400,
        message: error.message,
      });
    } else {
      return NextResponse.json({
        status: 400,
        message: "Failed to send message: Unknown error occurred",
      });
    }
  }
}

