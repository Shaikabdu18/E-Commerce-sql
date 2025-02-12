import sequelize from "../config/database.js";
import User from "./user.model.js";
import Product from "./product.model.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error.message);
  }
};

export { User, Product, syncDatabase };
