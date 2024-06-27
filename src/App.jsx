import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./component/header";
import Home from "./page/home";
import AddNew from "./page/addnew";
import List from "./page/List";
import Delete from "./page/delete";
import Error404 from "./page/error";
import Single from "./page/single";
function App() {


  return (
    <>
       <Header />
       <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/list" element={<List />} />
         <Route path="/addnew" element={<AddNew />} />
         <Route path="/delete" element={<Delete />} />
         <Route path="/product/:id" element={<Single />} />
         <Route path="*" element={<Error404 />} />
       </Routes>
    </>
  )
}

export default App
