import prisma from "../config/prisma.js";

export const createPartner = async (data) => {
  return await prisma.partner.create({
    data: {
      name: data.name,
      country: data.country || null,
      logo: data.logo || null,
      description: data.description || null,
      isActive: data.isActive ?? true,
    },
  });
};

export const getAllPartners = async () => {
  return await prisma.partner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPartnerById = async (id) => {
  return await prisma.partner.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updatePartner = async (id, data) => {
  return await prisma.partner.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      country: data.country || null,
      logo: data.logo || null,
      description: data.description || null,
      isActive: data.isActive,
    },
  });
};

export const deletePartner = async (id) => {
  return await prisma.partner.delete({
    where: {
      id: Number(id),
    },
  });
};