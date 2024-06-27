import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const AddNew = () => {
  const [product, setProduct] = useState({
    title: "",
    prices: "",
    description: "",
    image: "",
    category: "",
    
  });
  const handleSubmit= (e)=>{
    const {name, value} = e.target;
    setProduct((prevProduct)=>(
      {
        ...prevProduct,
        [name]: value
      }
    ))
  
  };
  const handleChange = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("https://fakestoreapi.com/products", product,{

        headers:{
          'Content-Type': "application/json"
        }
      });
      setProduct(response.data);
    }
    catch(err){
      console.log(err.message)
      console.log(sf)
    }
  }
  return (
    <>
     <div className='container  mx-auto'>
     <h1 className='text-5xl text-red-500  items-center md justify-center'>
        Add new Product in database
      </h1>
      <form onSubmit={handleSubmit} action="" className='h-[50px] grid justify-center items-center  '>
        <label htmlFor="title" className='text-extrabold'>title</label>
        <input type="text" name='title' value={product.title} onChange={handleSubmit} className='border-2 border-black box'/>
        <label htmlFor="prices">prices</label>
        <input type="number" name='prices' value={product.prices} className='border-2 border-black box'/>
        <label htmlFor="description">description</label>
        <input type="textarea" name='description' value={product.description} onChange={handleSubmit} className='border-2 border-black box'/>
        <label htmlFor="image">image</label>
        <input type="text" name='image' value={product.image} onChange={handleSubmit} className='border-2 border-black box'/>
        <label htmlFor="category">category</label>
        <input type="text" name='category' value={product.category} onChange={handleSubmit} className='border-2 border-black box'/>
        <button type='submit' className='w-1/3 bg-red-500 px-9 py-5'></button>
      </form>
     </div>
    </>
  )
}

export default AddNew