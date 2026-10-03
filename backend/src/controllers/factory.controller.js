import {
  createFactory,
  getAllFactories,
  getFactoryById,
  updateFactory,
  deleteFactory,
} from "../services/factory.service.js";

export const createFactoryController = async (req, res) => {
  try {
    const {
      name,
      location,
      description,
      image,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Factory name is required",
      });
    }

    const factory = await createFactory({
      name,
      location,
      description,
      image,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Factory created successfully",
      data: factory,
    });
  } catch (error) {
    console.error("Create factory error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create factory",
    });
  }
};

export const getFactories = async (req, res) => {
  try {
    const factories = await getAllFactories();

    return res.status(200).json({
      success: true,
      message: "Factories fetched successfully",
      data: factories,
    });
  } catch (error) {
    console.error("Get factories error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch factories",
    });
  }
};

export const getFactory = async (req, res) => {
  try {
    const factory = await getFactoryById(req.params.id);

    if (!factory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Factory fetched successfully",
      data: factory,
    });
  } catch (error) {
    console.error("Get factory error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch factory",
    });
  }
};

export const updateFactoryController = async (req, res) => {
  try {
    const {
      name,
      location,
      description,
      image,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Factory name is required",
      });
    }

    const existingFactory = await getFactoryById(req.params.id);

    if (!existingFactory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    const factory = await updateFactory(req.params.id, {
      name,
      location,
      description,
      image,
      isActive,
    });

    return res.status(200).json({
      success: true,
      message: "Factory updated successfully",
      data: factory,
    });
  } catch (error) {
    console.error("Update factory error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update factory",
    });
  }
};

export const removeFactory = async (req, res) => {
  try {
    const existingFactory = await getFactoryById(req.params.id);

    if (!existingFactory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    const factory = await deleteFactory(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Factory deleted successfully",
      data: factory,
    });
  } catch (error) {
    console.error("Delete factory error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete factory",
    });
  }
};