"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      nameProduct: DataTypes.STRING,
      typesProduct: DataTypes.STRING,
      typeNamePro: DataTypes.STRING,
      materialProduct: DataTypes.STRING,
      priceProduct: DataTypes.INTEGER,
      quantityProduct: DataTypes.INTEGER,
      discountProduct: DataTypes.INTEGER,
      imgProductMain: DataTypes.STRING,
      listImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    },
  );
  return Product;
};
