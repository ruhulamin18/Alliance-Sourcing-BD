import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../services/service.service.js";

export const createServiceController = async (req, res) => {
  try {
    const { title, description, image, isActive } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const service = await createService({
      title,
      description,
      image,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    console.error("Create service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await getAllServices();

    return res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      data: services,
    });
  } catch (error) {
    console.error("Get services error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await getServiceById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    console.error("Get service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

export const updateServiceController = async (req, res) => {
  try {
    const { title, description, image, isActive } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const existingService = await getServiceById(req.params.id);

    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const service = await updateService(req.params.id, {
      title,
      description,
      image,
      isActive,
    });

    return res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    console.error("Update service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

export const removeService = async (req, res) => {
  try {
    const existingService = await getServiceById(req.params.id);

    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const service = await deleteService(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully",
      data: service,
    });
  } catch (error) {
    console.error("Delete service error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};