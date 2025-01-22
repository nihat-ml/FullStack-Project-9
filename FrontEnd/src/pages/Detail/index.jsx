import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
    const [product, setProduct] = useState()
    let {_id} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/myproducts/${_id}`)
        .then(res=>{
            setProduct(res.data)
        })
    },[])
  return (
    <>
        <div className='products contain '>
          {
            <div key={product._id} className='product'>
              <img src={product.image} alt="" />
              <p>
                Title: {product.title}
              </p>
              Price: ${product.price}
              <button className='backBtn'onClick={()=> navigate("/")}>Back to Home</button>
            </div>
          }
        </div>
    </>
  )
}

export default Detail