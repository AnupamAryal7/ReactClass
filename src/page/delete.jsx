import { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

const Delete = () => {
  const [post, Setpost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        Setpost(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async(postsId) =>{
    try{
      await axios.delete(`https://fakestoreapi.com/products/${postsId}`);
      Setpost(post.filter(posts => posts.id !== postsId ))
    }catch(e){
      console.log("Error While Deleting Product");
    }
  }

  return (
    <>
      <div className="container mx-auto h-[20vh]">
        {post.map((posts) => (
          <div key={posts.key} className="bg-white p-4 flex gap-11 justify-between items-center">
            <div className="w-1/3">
              <img
                className="w-[250px] h-[250px] my-4 "
                src={posts.image}
                alt=""
              />
            </div>
            <div className="w-1/3">
              <h1 className="text-xl font-extrabold">{posts.title}</h1>
              <p className="text-sm text-justify w-4/6">{posts.description}</p>
              <p className="text-sm">
                price :
                <span className="font-extrabold text-xl">${posts.price}</span>
              </p>
              <p className="text-sm">
                category :
                <span className="font-extrabold text-xl">{posts.category}</span>
              </p>
            </div>
            <MdDeleteOutline onClick={()=>handleDelete(posts.id)} className="text-2xl hover:text-red-600"/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Delete;