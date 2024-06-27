import React from 'react'
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {


    const [showMenu, setShowMenu] = useState(false);

    function Menu() {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <nav className="h-[70px] container mx-auto flex justify-between items-center">
                <div className="">
                    <h1 className=" text-blue-500 text-2xl font-bold hover:text-red-500">Nepalaya</h1>
                </div>
                <ul className="hidden md:flex gap-7">
                    <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl" to="/">Home</Link></li>
                    <li><Link className="text-blue-500 text-sm  hover:text-red-500 hover:text-xl" to="/list">List</Link></li>
                    <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl" to="/addnew">Add new</Link></li>
                    <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl" to="/delete">Delete</Link></li>
                </ul>
                <div className="md:hidden">
                    <FaBars className="" onClick={Menu} />
                </div>
            </nav>
            {
                showMenu && (
                    <ul className="md:hidden flex flex-col gap-7 text-center" >
                        <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl hover:bg-blue-600 w-full" to="/">Home</Link></li>
                        <li><Link className="text-blue-500 text-sm  hover:text-red-500 hover:text-xl hover:bg-blue-600 w-full" to="/list">List</Link></li>
                        <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl hover:bg-blue-600 w-full" to="/addnew">Add new</Link></li>
                        <li><Link className="text-blue-500 text-sm hover:text-red-500 hover:text-xl hover:bg-blue-600 w-full" to="/delete">Delete</Link></li>
                    </ul>
                )
            }
        </>
    )
}

export default Header