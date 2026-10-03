import prisma from "../config/prisma.js";

export const createService = async (data) => {
  return await prisma.service.create({
    data: {
      title: data.title,
      description: data.description,
      image: data.image || null,
      icon: data.icon || null,
      isActive: data.isActive ?? true,
    },
  });
};

export const getAllServices = async () => {
  return await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getServiceById = async (id) => {
  return await prisma.service.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateService = async (id, data) => {
  return await prisma.service.update({
    where: {
      id: Number(id),
    },
    data: {
      title: data.title,
      description: data.description,
      image: data.image || null,
      icon: data.icon || null,
      isActive: data.isActive,
    },
  });
};

export const deleteService = async (id) => {
  return await prisma.service.delete({
    where: {
      id: Number(id),
    },
  });
};