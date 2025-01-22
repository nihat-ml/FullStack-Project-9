import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

function Products() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    function getProducts(){
        axios.get("http://localhost:3000/myproducts")
        .then((res)=>{
            setProducts(res.data)
        })
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <>
        <div className='Products'>
        <h1>New realeased Products for Women</h1>
            <div className="cards">
                
                {products.map((product)=>(
                    <div className="card" key={product._id}>
                    <img src={product.image}  width="100%" />
                    <p>{product.title}</p>
                    
                    <span>${product.price}</span>
                    <div className='btns' style={{display:"flex", gap:"20px", margin:"10px 0px"}}>
                        <button onClick={()=> navigate(`/${product._id}`)} style={{backgroundColor:"blue", color:"white", padding:"5px 10px", border:"none", borderRadius:"5px", fontSize:"15px"}}>Detail</button>
                        <button  style={{backgroundColor:"red", color:"white", padding:"5px 10px", border:"none", borderRadius:"5px", fontSize:"15px"}}>Add Favorite</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Products