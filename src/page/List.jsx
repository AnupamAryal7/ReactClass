import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
    const [post, Setpost] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                let response = await axios.get("https://fakestoreapi.com/products");
                Setpost(response.data);
                console.log(response.data);
            }catch(e){
                console.log(e.message);
            }
        }
        fetchData();
    },[]);
    
  return (
    <>
        <div className="container mx-auto flex flex-wrap gap-4 justify-between h-[20vh]">
            {
                post.map(posts=>(
                    <div key={posts.key} className="bg-white p-4  w-[350px] flex flex-col items-center">
                <img className="w-[250px] h-[250px] my-4" src={posts.image} alt="" />
                <h1 className="text-xl font-extrabold">{posts.title}</h1>
                <p className="text-sm text-justify w-4/6">{posts.description}</p>
                <p className="text-sm">price : <span className="font-extrabold text-xl">${posts.price}</span></p>
                <p className="text-sm">category : <span className="font-extrabold text-xl">{posts.category}</span></p>
                <p className="text-sm">rating : <span className="font-extrabold text-xl">{posts.rating.rate}</span></p>
                <Link to={`/product/${posts.id}`}>Details</Link>
            </div>
                ))
            }
            
        </div>
    </>
  )
}

export default List