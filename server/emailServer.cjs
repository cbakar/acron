require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/sendEmail", async (req, res) => {
  const { firstName, lastName, company, email, phone, message } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acorn <onboarding@resend.dev>",
      to: ["cembakar@gmail.com"], // Change to your real destination
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      html: `<strong>Company:</strong> ${company}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Message:</strong> ${message}`,
    });
    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        error: typeof error === "object" ? JSON.stringify(error) : error,
      });
    }
    res.status(200).json({ data });
  } catch (err) {
    console.error("Server error:", err);
    res
      .status(500)
      .json({ error: err && err.message ? err.message : JSON.stringify(err) });
  }
});

app.listen(port, () => {
  console.log(`Email server listening on port ${port}`);
});
