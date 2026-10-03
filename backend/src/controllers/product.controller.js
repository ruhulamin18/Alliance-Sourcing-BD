import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../services/product.service.js";

// ==========================================
// CREATE PRODUCT
// ==========================================
export const createProductController = async (req, res) => {
  try {
    const {
      name,
      category,
      subcategory,
      description,
      image,
      isActive,
    } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    if (!category?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const product = await createProduct({
      name: name.trim(),
      category: category.trim(),
      subcategory: subcategory?.trim() || null,
      description: description?.trim() || null,
      image: image?.trim() || null,
      isActive: isActive ?? true,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create product",
    });
  }
};

// ==========================================
// GET ALL PRODUCTS
// ==========================================
export const getProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("GET PRODUCTS ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch products",
    });
  }
};

// ==========================================
// GET SINGLE PRODUCT
// ==========================================
export const getProductController = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("GET PRODUCT ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch product",
    });
  }
};

// ==========================================
// UPDATE PRODUCT
// ==========================================
export const updateProductController = async (req, res) => {
  try {
    const id = Number(req.params.id);

    console.log("=================================");
    console.log("UPDATE PRODUCT REQUEST");
    console.log("Product ID:", id);
    console.log("Request Body:", req.body);
    console.log("=================================");

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    // Check product exists
    const existingProduct = await getProductById(id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const {
      name,
      category,
      subcategory,
      description,
      image,
      isActive,
    } = req.body;

    // Validation
    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    if (!category?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const updatedProduct = await updateProduct(id, {
      name: name.trim(),
      category: category.trim(),
      subcategory: subcategory?.trim() || null,
      description: description?.trim() || null,
      image: image?.trim() || null,
      isActive:
        typeof isActive === "boolean"
          ? isActive
          : existingProduct.isActive,
    });

    console.log("PRODUCT UPDATED:");
    console.log(updatedProduct);

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("=================================");
    console.error("UPDATE PRODUCT ERROR");
    console.error(error);
    console.error("=================================");

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update product",
    });
  }
};

// ==========================================
// DELETE PRODUCT
// ==========================================
export const deleteProductController = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const existingProduct = await getProductById(id);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await deleteProduct(id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to delete product",
    });
  }
};