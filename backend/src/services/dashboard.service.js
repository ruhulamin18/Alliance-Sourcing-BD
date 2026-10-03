import prisma from "../config/prisma.js";

export const getDashboardStats = async () => {
  const [
    services,
    products,
    factories,
    machinery,
    partners,
    messages,
    unreadMessages,
  ] = await Promise.all([
    prisma.service.count(),
    prisma.product.count(),
    prisma.factory.count(),
    prisma.machinery.count(),
    prisma.partner.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({
      where: {
        isRead: false,
      },
    }),
  ]);

  return {
    services,
    products,
    factories,
    machinery,
    partners,
    messages,
    unreadMessages,
  };
};