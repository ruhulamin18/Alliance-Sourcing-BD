import { getDashboardStats } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const stats = await getDashboardStats();

    return res.status(200).json({
      success: true,
      message: "Dashboard stats fetched successfully",
      data: stats,
    });
  } catch (error) {
    console.error("Get dashboard stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard stats",
    });
  }
};