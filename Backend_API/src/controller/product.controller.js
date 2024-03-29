const db = require("../../util/db.config");

const getAllproduct = (req, res) => {
  var sqlQuery = "SELECT * FROM product";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.json({
        err: true,
        message: err,
      });
    } else {
      res.json({
        list: result,
      });
    }
  });
};

const getOne = (req, res) => {
  var code = req.params.code;
  var sqlQuery = "SELECT * FROM product WHERE product_id=?";
  db.query(sqlQuery, [code], (err, result) => {
    if (err) {
      res.json({
        err: true,
        message: err,
      });
    } else {
      res.json({
        list: result,
      });
    }
  });
};

const updateProduct = (req, res) => {
  var { category_id, name, quantity, price, description } = req.body;
  var code = req.params.code;
  var sqlInsert =
    " UPDATE product SET category_id = ?, name = ?, quantity = ?, " +
    "price =?, description = ? WHERE product_id=?";

  var values = [category_id, name, quantity, price, description, code];
  db.query(sqlInsert, values, (err, result) => {
    if (err) {
      res.json({
        err: true,
        message: err,
      });
    } else {
      res.json({
        message: "Product update successfully....................!",
      });
    }
  });
};

const uploadProduct = (req, res) => {
  var { category_id, name, quantity, price, description } = req.body;
  var image = null;
  if (req.file) {
    image = req.file.filename;
  }

  var sqlInsert =
    " INSERT INTO product (category_id, name, quantity, price, description, image)" +
    " VALUES (?,?,?,?,?, ?)";
  var values = [category_id, name, quantity, price, description, image];
  db.query(sqlInsert, values, (err, result) => {
    if (err) {
      res.json({
        err: true,
        message: err,
      });
    } else {
      res.json({
        message: "Product uploaded....................!",
      });
    }
  });
};

module.exports = {
  getAllproduct,
  updateProduct,
  getOne,
  uploadProduct,
};
