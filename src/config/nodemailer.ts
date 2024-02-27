import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};


export async function sendMessage(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  design: string;
  description: string;
  budget: string;
}): Promise<string> {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    role,
    design,
    description,
    budget,
  } = data;
  // Compose email message
  const message = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    Company: ${company}
    Role: ${role}
    Design: ${design}
    Description: ${description}
    Budget: ${budget}
  `;

  // Send email using transporter and mailOptions
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact Form Submission",
      html: `<h1>New Contact Form Submission</h1><p>${message}</p>`,
      text: message,
    });

    return `Message sent: ${info.messageId}`;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send message: ${error.message}`);
    } else {
      throw new Error(`Failed to send message: Unknown error occurred`);
    }
  }
}
