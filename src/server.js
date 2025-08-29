import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());  //Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// Booking endpoint
app.post("/booking", async (req, res) => {
  const { parentName, email, childName, bookingDate, notes } = req.body;
  
  // Basic validation
  if (!parentName || !email || !childName || !bookingDate) {
    return res.status(400).json({ message: "Please fill in all required fields." });
};

try {
// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send email
  await transporter.sendMail({
    from: `"Booking Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // list of receivers
    subject: "New Booking Request",
    text: `
      Parent Name: ${parentName}
      Email: ${email}
      Child Name: ${childName}
      Booking Date: ${bookingDate}
      Notes: ${notes || 'None'}
    `,
  });

  res.json({ message: "Booking request sent successfully." });
} catch (error) {
  console.error("Failed to send booking:", error);
  res.status(500).json({ message: "Failed to send booking. Please try again later." });
}
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
