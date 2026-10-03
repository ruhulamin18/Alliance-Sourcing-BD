import {
  createMachinery,
  getAllMachinery,
  getMachineryById,
  updateMachinery,
  deleteMachinery,
} from "../services/machinery.service.js";

export const createMachineryController = async (req, res) => {
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
        message: "Machinery name is required",
      });
    }

    const machinery = await createMachinery({
      name,
      description,
      image,
      category,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Machinery created successfully",
      data: machinery,
    });
  } catch (error) {
    console.error("Create machinery error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create machinery",
    });
  }
};

export const getMachinery = async (req, res) => {
  try {
    const machinery = await getAllMachinery();

    return res.status(200).json({
      success: true,
      message: "Machinery fetched successfully",
      data: machinery,
    });
  } catch (error) {
    console.error("Get machinery error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch machinery",
    });
  }
};

export const getMachineryItem = async (req, res) => {
  try {
    const machinery = await getMachineryById(req.params.id);

    if (!machinery) {
      return res.status(404).json({
        success: false,
        message: "Machinery not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Machinery fetched successfully",
      data: machinery,
    });
  } catch (error) {
    console.error("Get machinery item error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch machinery",
    });
  }
};

export const updateMachineryController = async (req, res) => {
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
        message: "Machinery name is required",
      });
    }

    const existingMachinery = await getMachineryById(req.params.id);

    if (!existingMachinery) {
      return res.status(404).json({
        success: false,
        message: "Machinery not found",
      });
    }

    const machinery = await updateMachinery(req.params.id, {
      name,
      description,
      image,
      category,
      isActive,
    });

    return res.status(200).json({
      success: true,
      message: "Machinery updated successfully",
      data: machinery,
    });
  } catch (error) {
    console.error("Update machinery error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update machinery",
    });
  }
};

export const removeMachinery = async (req, res) => {
  try {
    const existingMachinery = await getMachineryById(req.params.id);

    if (!existingMachinery) {
      return res.status(404).json({
        success: false,
        message: "Machinery not found",
      });
    }

    const machinery = await deleteMachinery(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Machinery deleted successfully",
      data: machinery,
    });
  } catch (error) {
    console.error("Delete machinery error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete machinery",
    });
  }
};