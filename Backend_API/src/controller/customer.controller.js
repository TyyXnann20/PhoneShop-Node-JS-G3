const db = require("../../util/db.config");
const bcrypt = require("bcrypt");
const register = (req, res) => {
  var { firstname, lastname, gender, dob, tel, email, password } = req.body;
  var image = null;
  if (req.file) {
    image = req.file.filename;
  }
  var sqlCheckAccount = " SELECT * FROM customers WHERE email=?";
  db.query(sqlCheckAccount, [email], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      if (data.length > 0) {
        res.json(`Your ${email} already existing , please login`);
      } else {
        var lastPassword = bcrypt.hashSync(password, 10);
        var sqlCreateAccount =
          " INSERT INTO customers (firstname, lastname, gender, " +
          " dob, tel, email, password, image)" +
          " VALUES (?,?,?,?,?,?,?,?)";
      }
      var values = [
        firstname,
        lastname,
        gender,
        dob,
        tel,
        email,
        lastPassword,
        image,
      ];
      db.query(sqlCreateAccount, values, (err, result) => {
        if (err) {
          res.json({
            err: true,
            message: err,
          });
        } else {
          res.json({
            result,
            message: `${email} is registered into our website`,
          });
        }
      });
    }
  });
};

const login = (req, res) => {
  var { email, password } = req.body;
  var sqlCheckAccount = " SELECT * FROM customers WHERE email=?";
  db.query(sqlCheckAccount, [email], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length === 0) {
        res.send(`${email} isn't match, please register.................!`);
      } else {
        var userInfo = result[0];
        var passwordInDB = userInfo.password;
        var isPassword = bcrypt.compareSync(password, passwordInDB);
        if (isPassword) {
          res.json({
            message: "Login successfully.........................!",
            is_login: true,
            data: userInfo,
          });
        } else {
          res.json(" Inncorrect password, please try again.................!");
        }
      }
    }
  });
};

module.exports = {
  register,
  login,
};
