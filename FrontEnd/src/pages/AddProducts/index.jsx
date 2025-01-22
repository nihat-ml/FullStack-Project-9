import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AddProducts() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3000/myproducts")
        .then((res)=>{
            setProducts(res.data)
        })
    },[])

    const formik = useFormik({
        initialValues: {
          title: '',
          image: '',
          price: '',
        },
        validationSchema: Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          image: Yup.string()
            
            .required('Required'),
          price:Yup.number() .required('Required'),
        }),
        onSubmit: values => {
          axios.post("http://localhost:3000/myproducts", values)
          .then((res)=>{
            setProducts([...products, res.data])
          })
          alert("Elave olundu")
        },
      });

      const handledelete = (_id) =>{
        axios.delete(`http://localhost:3000/myproducts/${_id}`)
        .then(()=>{
            setProducts(products.filter((product)=> product._id !== _id))
            alert("Product silindi")
        })
      }
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Add Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
 
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button type="submit" onClick={()=> navigate("/")}>Submit</button>
     </form>

     <div className='products-table'>
        <h2>Your Products</h2>

        <table style={{border:'2px solid black', width:"100%"}}>
            <thead>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
            </thead>
            <tbody>
             {products.map((product)=>(
                <tr key={product._id}>
                    <td style={{width:'20%'}}><img src={product.image} style={{width:"30%"}} /></td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td><button style={{backgroundColor:'red', color:"white", padding:'10px 15px'}} onClick={()=>handledelete(product._id)}>Delete</button></td>
                </tr>
                
             ))}   
            </tbody>
        </table>

     </div>
    
    </>
  )
}

export default AddProducts