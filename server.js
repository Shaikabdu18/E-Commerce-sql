import express from "express";
import dotenv from "dotenv";
import { syncDatabase } from "./models/index.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();
const app = express();


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

syncDatabase();

app.listen(5000, () => console.log("Server running on port 5000"));
