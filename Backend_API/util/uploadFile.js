const multer = require("multer");
const image_path = "C:/xampp/htdocs/img_path";
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, image_path);
    },
  }),
  limits: 1024 * 1024 * 4,
});
module.exports = { upload };
