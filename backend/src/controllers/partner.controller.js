import {
  createPartner,
  getAllPartners,
  getPartnerById,
  updatePartner,
  deletePartner,
} from "../services/partner.service.js";

export const createPartnerController = async (req, res) => {
  try {
    const {
      name,
      country,
      logo,
      description,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Partner name is required",
      });
    }

    const partner = await createPartner({
      name,
      country,
      logo,
      description,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Partner created successfully",
      data: partner,
    });
  } catch (error) {
    console.error("Create partner error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create partner",
    });
  }
};

export const getPartners = async (req, res) => {
  try {
    const partners = await getAllPartners();

    return res.status(200).json({
      success: true,
      message: "Partners fetched successfully",
      data: partners,
    });
  } catch (error) {
    console.error("Get partners error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch partners",
    });
  }
};

export const getPartner = async (req, res) => {
  try {
    const partner = await getPartnerById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Partner fetched successfully",
      data: partner,
    });
  } catch (error) {
    console.error("Get partner error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch partner",
    });
  }
};

export const updatePartnerController = async (req, res) => {
  try {
    const {
      name,
      country,
      logo,
      description,
      isActive,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Partner name is required",
      });
    }

    const existingPartner = await getPartnerById(req.params.id);

    if (!existingPartner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    const partner = await updatePartner(req.params.id, {
      name,
      country,
      logo,
      description,
      isActive,
    });

    return res.status(200).json({
      success: true,
      message: "Partner updated successfully",
      data: partner,
    });
  } catch (error) {
    console.error("Update partner error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update partner",
    });
  }
};

export const removePartner = async (req, res) => {
  try {
    const existingPartner = await getPartnerById(req.params.id);

    if (!existingPartner) {
      return res.status(404).json({
        success: false,
        message: "Partner not found",
      });
    }

    const partner = await deletePartner(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Partner deleted successfully",
      data: partner,
    });
  } catch (error) {
    console.error("Delete partner error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete partner",
    });
  }
};