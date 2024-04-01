const productController = require("../controller/product.controller");
const {upload} = require("../../util/uploadFile")
const product = (app) => {
  app.get("/getProducts", productController.getAllproduct);
  app.get("/getone/:code", productController.getOne);
  app.post("/updateProduct/:code", productController.updateProduct);
  app.post("/insertProduct", upload.single("upload_image") ,productController.uploadProduct)
};

module.exports = product;
