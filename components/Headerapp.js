import { useState } from "react";
import { logo_url } from "../utils/urls";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Usercontext } from "./Usercontext";
import { useContext } from "react"; 
import { useSelector } from "react-redux";

const Headerapp=()=>{

    const [login,setlogin]=useState("login")
    const status=useOnlineStatus()
    const {loginuser}=useContext(Usercontext)
const  cartitems=useSelector((store)=>store.cart.items)

    return (

        <div className="flex justify-between p-5 bg-orange-200 items-center" >

         <Link to="/">  <img className="w-28 shadow-md shadow-orange-700 rounded-md hover:bg-orange-950 py-2 " 
            src={logo_url}/></Link> 
            <div className="hover:shadow-xl hover:shadow-orange-600">
                <ul className="flex justify-between items-center shadow-xl shadow-orange-300 hover:shadow-2xl">
                    <li className="mr-20 ml-3 hover:cursor-pointer ">onlinestatus{status ? " 🟢":"🔴"}</li>
                    <li className="m-3 hover:text-2xl px-2 py-2 shadow-sm shadow-red-900"><Link to="/">Home</Link></li>
                    <li className="m-3 hover:text-2xl  px-2 py-2 shadow-sm shadow-red-900"><Link to="/about">About Us</Link></li>
                   <li className="m-3 hover:text-2xl  px-2 py-2 shadow-sm shadow-red-900"> <Link to="/contact">Contact</Link></li>
                    <li className="m-3 bg-white hover:text-2xl  px-2 py-2 shadow-sm shadow-red-900"><Link to="/cart">🛒-({cartitems.length})</Link></li>
                    <button className="m-3 bg-orange-500 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>{

               login==="login"?setlogin("logout"):setlogin("login")
                                   
            }
               
                        
                        }>
                            {login}</button>
                            <li>{loginuser}</li>
                </ul>
            </div>

            
        </div>
    )
}

export default Headerapp;