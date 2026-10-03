import prisma from "../config/prisma.js";

// Create Product
export const createProduct = async (data) => {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description || null,
      image: data.image || null,
      category: data.category,
      subcategory: data.subcategory || null,
      isActive: data.isActive ?? true,
    },
  });
};

// Get All Products
export const getAllProducts = async () => {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
};

// Get Product By ID
export const getProductById = async (id) => {
  return await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
};

// Update Product
export const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      description: data.description || null,
      image: data.image || null,
      category: data.category,
      subcategory: data.subcategory || null,
      isActive: data.isActive ?? true,
    },
  });
};

// Delete Product
export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
};