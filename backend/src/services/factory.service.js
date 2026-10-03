import prisma from "../config/prisma.js";

export const createFactory = async (data) => {
  return await prisma.factory.create({
    data: {
      name: data.name,
      location: data.location || null,
      description: data.description || null,
      image: data.image || null,
      isActive: data.isActive ?? true,
    },
  });
};

export const getAllFactories = async () => {
  return await prisma.factory.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getFactoryById = async (id) => {
  return await prisma.factory.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateFactory = async (id, data) => {
  return await prisma.factory.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      location: data.location || null,
      description: data.description || null,
      image: data.image || null,
      isActive: data.isActive,
    },
  });
};

export const deleteFactory = async (id) => {
  return await prisma.factory.delete({
    where: {
      id: Number(id),
    },
  });
};