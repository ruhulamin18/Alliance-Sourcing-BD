import prisma from "../config/prisma.js";

export const getAllMessages = async () => {
  return await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getMessageById = async (id) => {
  return await prisma.contactMessage.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const markMessageAsRead = async (id) => {
  return await prisma.contactMessage.update({
    where: {
      id: Number(id),
    },
    data: {
      isRead: true,
    },
  });
};

export const deleteMessage = async (id) => {
  return await prisma.contactMessage.delete({
    where: {
      id: Number(id),
    },
  });
};