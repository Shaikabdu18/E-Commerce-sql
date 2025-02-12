import { Product } from "../models/index.js";


export const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = await Product.create({
      name,
      price,
      description,
      userId: req.user.id, 
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};


export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.userId !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to update this product" });
    }

    await product.update(req.body);
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

 
    if (product.userId !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this product" });
    }

    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};
