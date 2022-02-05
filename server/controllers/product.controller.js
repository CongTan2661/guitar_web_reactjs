const { Product } = require("../models");
const APIProduct = {
  createProduct: async (req, res) => {
    try {
      const {
        nameProduct,
        typesProduct,
        typeNamePro,
        materialProduct,
        priceProduct,
        quantityProduct,
        discountProduct,
      } = req.body;
      const listProImg = req.files;
      // console.log(listProImg.productMain[0].path);
      console.log(listProImg);
      let imgProductMain = "";
      let listImg = [];
      if (listProImg) {
        if (listProImg.productMain) {
          imgProductMain = `http://localhost:8082/${listProImg.productMain[0].path}`;
        }

        if (listProImg.productList) {
          listProImg.productList.map((value) => {
            listImg.push(`http://localhost:8082/${value.path}`);
          });
        }
        listImg = JSON.stringify(listImg);
        imgProductMain = JSON.stringify(imgProductMain);
      }
      const newProduct = await Product.create({
        nameProduct,
        typesProduct,
        typeNamePro,
        materialProduct,
        priceProduct,
        quantityProduct,
        discountProduct,
        imgProductMain,
        listImg,
      });

      // res.redirect("http://localhost:8081/admin/product-manage");
      res.status(200).send(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
  getProductList: async (req, res) => {
    let listPro = await Product.findAll();
    res.send(listPro);
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      let productId = await Product.findByPk(id);
      res.status(200).send(productId);
    } catch (error) {
      console.log(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      let {
        nameProduct,
        typesProduct,
        typeNamePro,
        materialProduct,
        priceProduct,
        quantityProduct,
        discountProduct,
        imgProductMain,
        listImg,
      } = req.body;

      let arrListImg = listImg.split(",");

      let newListImg = req.files;
      if (newListImg.productMain) {
        imgProductMain = `http://localhost:8082/${newListImg.productMain[0].path}`;
      }
      if (newListImg.productList) {
        newListImg.productList.map((value) => {
          arrListImg.push(`http://localhost:8082/${value.path}`);
        });
        listImg = JSON.stringify(arrListImg);
      } else {
        listImg = JSON.stringify(arrListImg);
      }

      imgProductMain = JSON.stringify(imgProductMain);
      const { id } = req.params;
      let data = {
        nameProduct,
        typesProduct,
        typeNamePro,
        materialProduct,
        priceProduct,
        quantityProduct,
        discountProduct,
        imgProductMain,
        listImg,
      };
      let updatePro = await Product.update(data, {
        where: { id },
      });
      res.status(200).send(updatePro);
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      let proDelete = await Product.findByPk(id);
      await Product.destroy({
        where: { id },
      });

      res.send(proDelete.dataValues);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = {
  APIProduct,
};
