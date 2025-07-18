import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

/**
 * Generic reusable mail sender
 */
export const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

export const sendContactEmails = async ({ name, email, message }) => {
  const adminEmail = process.env.ADMIN_EMAIL;

  
  const adminHtml = `
    <h2> New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <br />
    <p>✅ Please respond to the sender as soon as possible.</p>
  `;

 
  const userHtml = `
    <h2>Hello ${name},</h2>
    <p>Thank you for reaching out!</p>
    <p>I’ve received your message and will get back to you shortly.</p>
    <hr />
    
    <br />
    <p>Warm regards,<br/>Ritik Kumar</p>
  `;

  await Promise.all([
    sendEmail(adminEmail, ` New Contact Request from ${name}`, adminHtml),
    sendEmail(email, " Thanks for reaching out!", userHtml),
  ]);
};
