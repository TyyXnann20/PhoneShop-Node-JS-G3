const customerController = require("../controller/customer.controller");
const { upload } = require("../../util/uploadFile");

const customer = (app) => {
  app.post(
    "/customer/register",
    upload.single("customer_image"),
    customerController.register
  );
  app.post("/customer/login", customerController.login);
};

module.exports = customer;
