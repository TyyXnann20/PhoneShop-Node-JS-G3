const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const db = require("./util/db.config");
const PORT = 8090;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

require("./src/route/product.route")(app);
require("./src/route/customer.route")(app);

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
