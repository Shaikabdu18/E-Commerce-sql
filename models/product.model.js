import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import {User} from "../models/index.js"

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  userId:{type:DataTypes.INTEGER,allowNull: false,references: { model: User,key: "id", },}
});

export default Product;
