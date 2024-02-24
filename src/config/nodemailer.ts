import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
