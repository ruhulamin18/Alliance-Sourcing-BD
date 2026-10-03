import prisma from "../config/prisma.js";

export const createMachinery = async (data) => {
  return await prisma.machinery.create({
    data: {
      name: data.name,
      description: data.description || null,
      image: data.image || null,
      category: data.category || null,
      isActive: data.isActive ?? true,
    },
  });
};

export const getAllMachinery = async () => {
  return await prisma.machinery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getMachineryById = async (id) => {
  return await prisma.machinery.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateMachinery = async (id, data) => {
  return await prisma.machinery.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      description: data.description || null,
      image: data.image || null,
      category: data.category || null,
      isActive: data.isActive,
    },
  });
};

export const deleteMachinery = async (id) => {
  return await prisma.machinery.delete({
    where: {
      id: Number(id),
    },
  });
};