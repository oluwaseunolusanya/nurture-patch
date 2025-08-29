import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { parentName, email, childName, bookingDate, notes } = req.body;

  if (!parentName || !email || !childName || !bookingDate) {
    return res.status(400).json({ message: "Please fill in all required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Booking Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Booking Request",
      text: `
        Parent Name: ${parentName}
        Email: ${email}
        Child Name: ${childName}
        Booking Date: ${bookingDate}
        Notes: ${notes || "None"}
      `,
    });

    res.status(200).json({ success: true, message: "Booking request sent successfully." });
  } catch (error) {
    console.error("Failed to send booking:", error);
    res.status(500).json({ success: false, message: "Failed to send booking. Please try again later." });
  }
}