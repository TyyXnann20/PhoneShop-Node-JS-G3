import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewdata = () => {
    const [data, setData] = useState([]);
    const { code } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8090/getone/${code}`).then((res) => {
            setData(res.data.list)

        }).catch((err) => {
            console.log(err)
        })

    }, [code])




    return (
        <div className="main-views">
            <h1>Prodouct ID: {code}</h1>
            {data.map((product) => {
                return (
                    <ul>
                        <li>
                            NAME: {product.name}
                        </li>
                        <li>
                            PRICE: {product.price}
                        </li>
                        <li>
                            QTY: {product.quantity}
                        </li>
                        <li>
                            DESCRIPTION: {product.description}
                        </li>
                    </ul>

                )
            })}

        </div>
    )



}
export default Viewdata;