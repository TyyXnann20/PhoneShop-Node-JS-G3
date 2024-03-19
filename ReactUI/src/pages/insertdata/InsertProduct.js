import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Space, Table, Image, message } from "antd";
import axios from "axios";
const InserProduct = () => {
    const [allVaues, setValues] = useState({
        category_id: "",
        name: "",
        quantity: "",
        price: "",
        description: ""
    })
    const [imageOjectFile, setImageObject] = useState(null);

    const nav = useNavigate();
    const InsertData = (e) => {
        var myForm = new FormData();
        myForm.append("category_id", allVaues.category_id)
        myForm.append("name", allVaues.name)
        myForm.append("quantity", allVaues.quantity)
        myForm.append("price", allVaues.price)
        myForm.append("description", allVaues.description)
        myForm.append("upload_image", imageOjectFile, imageOjectFile.filename);


        e.preventDefault();
        var url = "http://localhost:8090/insertProduct"
        axios.post(url, myForm).then((res) => {
            message.success(res.data.message)
            nav('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleImageUpload = (e) => {
        var imageObject = e.target.files[0];
        setImageObject(imageObject);

    }



    return (
        <div className='container-fluid bg-light vh-100 vw-100'>
            <div className="row">
                <h1>Insert New Product</h1>
                <div className='d-flex justify-content-end'>
                    <Link to='/' class='btn btn-success'>Home</Link>
                </div>
                <form onSubmit={InsertData}>
                    <div class="mb-3">
                        <label class="form-label"> Category Code</label>
                        <input type="number" class="form-control"
                            onChange={(e) => {
                                setValues({ ...allVaues, category_id: e.target.value })
                            }}

                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label"> Product Name</label>
                        <input type="text" class="form-control"
                            onChange={(e) => {
                                setValues({ ...allVaues, name: e.target.value })
                            }}

                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label"> Quantity</label>
                        <input type="number" class="form-control"
                            onChange={(e) => {
                                setValues({ ...allVaues, quantity: e.target.value })
                            }}

                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label"> Price</label>
                        <input type="number" class="form-control"
                            onChange={(e) => {
                                setValues({ ...allVaues, price: e.target.value })
                            }}

                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label"> Description</label>
                        <input type="text" class="form-control"
                            onChange={(e) => {
                                setValues({ ...allVaues, description: e.target.value })
                            }}

                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Upload Product Image </label>
                        <input type="file" class="form-control"

                            onChange={handleImageUpload}

                        />
                    </div>



                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>




            </div>
        </div>
    )
}

export default InserProduct;