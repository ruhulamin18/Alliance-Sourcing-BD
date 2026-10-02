import { createContactMessage as saveContactMessage } from "../services/contact.service.js";

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const contactMessage = await saveContactMessage({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      data: contactMessage,
    });
  } catch (error) {
    console.error("Contact message error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save contact message",
    });
  }
};