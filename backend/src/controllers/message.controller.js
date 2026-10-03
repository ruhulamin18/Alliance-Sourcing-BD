import {
  getAllMessages,
  getMessageById,
  markMessageAsRead,
  deleteMessage,
} from "../services/message.service.js";
export const getMessages = async (req, res) => {
  try {
    const messages = await getAllMessages();

    return res.status(200).json({
      success: true,
      message: "Messages fetched successfully",
      data: messages,
    });
  } catch (error) {
    console.error("Get messages error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await getMessageById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message fetched successfully",
      data: message,
    });
  } catch (error) {
    console.error("Get message error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch message",
    });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const message = await markMessageAsRead(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Message marked as read",
      data: message,
    });
  } catch (error) {
    console.error("Mark message as read error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to mark message as read",
    });
  }
};

export const removeMessage = async (req, res) => {
  try {
    const message = await deleteMessage(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
      data: message,
    });
  } catch (error) {
    console.error("Delete message error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete message",
    });
  }
};