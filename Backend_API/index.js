const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const multer = require('multer')
const db = require('./util/db.config')
const PORT = 8090;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))

const image_path = "C:/xampp/htdocs/img_path";
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, image_path)
        }
    }),
    limits: 1024 * 1024 * 4
})

app.get('/getProducts', (req, res) => {
    var sqlQuery = "SELECT * FROM product";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.json(
                {
                    err: true,
                    message: err
                }
            )
        } else {
            res.json({
                list: result
            })
        }
    })

})
app.get('/getone/:code', (req, res) => {
    var code = req.params.code;
    var sqlQuery = "SELECT * FROM product WHERE product_id=?";
    db.query(sqlQuery, [code], (err, result) => {
        if (err) {
            res.json(
                {
                    err: true,
                    message: err
                }
            )
        } else {
            res.json({
                list: result
            })
        }
    })

})

app.post("/insertProduct", upload.single("upload_image") , (req, res) => {
    var { category_id, name, quantity, price, description } = req.body;
    var image = null;
    if(req.file){
        image = req.file.filename;
    }
   
    
    var sqlInsert = " INSERT INTO product (category_id, name, quantity, price, description, image)" +
        " VALUES (?,?,?,?,?, ?)";
    var values = [category_id, name, quantity, price, description, image]
    db.query(sqlInsert, values, (err, result) => {
        if (err) {
            res.json({
                err: true,
                message: err
            })
        } else {
            res.json({
                message: "Product uploaded....................!"
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})