import express from "express";
import cors from "cors";
import "dotenv/config";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import productRoutes from "./routes/product.routes.js";
import factoryRoutes from "./routes/factory.routes.js";
import machineryRoutes from "./routes/machinery.routes.js";
import partnerRoutes from "./routes/partner.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Alliance Sourcing BD API is running",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/products", productRoutes);
app.use("/api/factories", factoryRoutes);
app.use("/api/machineries", machineryRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});