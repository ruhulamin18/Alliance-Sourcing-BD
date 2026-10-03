import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../services/product.service.js";

export const createProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      image,
      category,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    const product = await createProduct({
      name,
      description,
      image,
      category,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      image,
      category,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    const existingProduct = await getProductById(req.params.id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const product = await updateProduct(req.params.id, {
      name,
      description,
      image,
      category,
      isActive,
    });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const existingProduct = await getProductById(req.params.id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const product = await deleteProduct(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    console.error("Delete product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};