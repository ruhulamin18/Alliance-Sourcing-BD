import prisma from "../config/prisma.js";

export const createContactMessage = async (data) => {
  const { name, email, phone, subject, message } = data;

  return await prisma.contactMessage.create({
    data: {
      name,
      email,
      phone,
      subject,
      message,
    },
  });
};