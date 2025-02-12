import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", authMiddleware, addProduct);
router.get("/", getProducts);
router.get("/get/:id", getProductById);
router.put("/update/:id", authMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, deleteProduct);

export default router;
