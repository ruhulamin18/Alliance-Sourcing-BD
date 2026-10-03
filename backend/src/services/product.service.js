import prisma from "../config/prisma.js";

export const createProduct = async (data) => {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description || null,
      image: data.image || null,
      category: data.category || null,
      isActive: data.isActive ?? true,
    },
  });
};

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getProductById = async (id) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateProduct = async (id, data) => {
  return await prisma.product.update({
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

export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
};