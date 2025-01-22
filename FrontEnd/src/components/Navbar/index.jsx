import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFavorite } from "react-icons/md";

function Navbar() {
  return (
    <>
        <div className='container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
                </div>
                <div className='links'>
                    <Link to={""} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}>Home</Link>
                    <Link to={"/addproducts"} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}>Add Products</Link>
                    <Link to={""} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}>Men</Link>
                    <Link to={""} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}>Woman</Link>
                    <Link to={""} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}>Latest</Link>
                    <Link to={"/favorites"} style={{color:"black", textDecoration:"none", padding:"20px", fontWeight:"700"}}><MdOutlineFavorite /></Link>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Navbar