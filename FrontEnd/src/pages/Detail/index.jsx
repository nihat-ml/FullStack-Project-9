import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
    const [product, setProduct] = useState(null)  
    let {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/myproducts/${id}`)
            .then(res => {
                setProduct(res.data.data)
                console.log(res)
            })
            .catch(err => {
                console.error("Error fetching product data:", err)
            })
    }, [id])  


    

    if (!product) {
        return <div>Loading...</div>  
    }

    return (
        <div className='products contain'>
            <div key={product.id} className='product'>
                <img src={product.image} alt={product.title} />
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <button className='backBtn' onClick={() => navigate("/")}>Back to Home</button>
            </div>
        </div>
    )
}

export default Detail
