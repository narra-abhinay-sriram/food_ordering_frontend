import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Headerapp from "../components/Headerapp";
import Body from "../components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
//import About from "../components/About"
import { Contact } from "../components/Contact";
import Error from "../components/Eror";
import {Outlet} from "react-router-dom"
import {Restinside} from "../components/Restinside";
import { lazy,Suspense } from "react";
import { useContext } from "react";
import { Usercontext } from "../components/Usercontext";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import Cart from "../components/Cart";
{/*const Restcontain=(props )=>{

    return (
        <div className="restbody">
         
         <div className="restcards">
            <img className="restlogo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/95a7996dc6ad2556054cc2b4e4ee85fe"/>
            <h2>{props.resname}</h2>
            <h3>{props.cuisine}</h3>
            <h3>{props.rating}</h3>
            <h4>{props.deliveryTime}</h4>
            
         </div>
          
        </div>
    )
}*/}


  
  // * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)
  
  
const About=lazy(()=>import   ("../components/About"))

const Applayout=()=>{

    const [user,setuser]=useState(null)


useState(()=>{
 //some fetch operations
 const data="abhinay"
 setuser(data)
 

},[])

    return (
        <Usercontext.Provider value={{loginuser:user,setuser}}>
        <Provider store={appstore}>
        <div className="bg-cyan-800">
           <Headerapp/>
           <Outlet/>
              

            
        </div>
        </Provider>
        </Usercontext.Provider>


    ) 
}

const get=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },
        {

            path:"/about",
            element:<Suspense fallback={<h2>please wait untill load</h2>}><About/></Suspense>
        },
        {
            path:"/contact",
            element:<Contact/>
        },

        {
            path:"/restaurants/:restid",
            element:<Restinside/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
        
    
    ],
        errorElement:<Error/>
    },
    
])


const Root=ReactDOM.createRoot(document.getElementById('root'))
Root.render(<RouterProvider  router={get}/>)