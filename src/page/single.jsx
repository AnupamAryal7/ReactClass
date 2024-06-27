import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'


 const Single = () => {
  const {id} = useParams();
  const [product, setProduct] =useState({});
  useEffect(()=>{
    
    const fetchData = async()=>{
      try{
        let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(response.data);
        setProduct(response.data);
      }
      catch(e){
        console.log(e.message)
      }
    }
    fetchData();
  },[id])

  return (
    <>
    <div className='container h-[550px] mx-auto flex justify-between items-center'>
      <div>
        <img src={product.image} alt="" className='w-3/6' />
      </div>
      <div>
        <h1 className='text-3xl font-extrabold text-red-500'>{product.title}</h1>
        <h1>Price <span className='text-2xl font-extrabold text-red-500'>{product.price}</span></h1>
        <h1>Category <span className='text-2xl text-red-500 font-extrabold' ></span>{product.description}</h1>
        <h1 className='text-xl text-red-500 '>{product.category}</h1>
      </div>
      
    </div>
    </>
    
  )
}
export default Single
