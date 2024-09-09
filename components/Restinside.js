import {  useState } from "react"
import Shimmer from "./shimmer"
import { useParams } from "react-router-dom"
//import { fetch_url } from "../src/utils/urls"
import useRestinside from "../utils/useRestinside"
import Itemlist from "./Itemlist"
import Restitems from "./Restitems"

export const Restinside=()=>{
 //const [restinfo,setrestinfo]=useState(null)
 const {restid}=useParams()
 const restinfo=useRestinside(restid)
 const [showmenu,setshowmenu]=useState()

 //console.log(restinfo)
 //setrestinfo(restt)
 
   
 
if(restinfo===null){
    return <Shimmer/>
}

const {name,costForTwoMessage,
    cuisines,avgRating,
    totalRatingsString}=restinfo?.cards[2]?.card?.card?.info

    //const{itemCards}=  restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      const categories=restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>(c?.card?.card?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
    //console.log(restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    //console.log(categories)
    return(
        <div className="in-res">
            <div className=" mt-14 ml-32">
                <h2 className="font-bold text-2xl">{name}</h2>

            </div>

            <div className="h-20 mt-6 mb-4 mr-20 ml-20 shadow-lg shadow-gray-200 border-t-black rounded-md">
                <div className="flex justify-start font-semibold">
                 <p className="ml-32">⭐{avgRating}({totalRatingsString})</p>
                 <p className="ml-32">{costForTwoMessage}</p>
                </div>
             <h4 className="ml-32 text-red-400 font-light ">*{cuisines.join()}</h4>
            </div>
            <div className="" >
                
               
              {categories.map((c,index)=>( <Restitems key={c.card.card.name} item={c} 
              showmenu={index==showmenu ?true:false}
                setshowmenu={()=> setshowmenu(index)}
               />
                

                  
            ))}
               
               

            </div>
           
      
        </div>
    )

}

