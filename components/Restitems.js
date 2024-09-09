import { useState } from "react";
import Itemlist from "./Itemlist";
const Restitems=({item,showmenu,setshowmenu})=>{
// const [showmenu,setshowmenu]=useState(false)

    return(
    <div>
                 <div className=" flex justify-between text-center ml-40 mb-4 mr-60 shadow-lg shadow-bottom-black hover:cursor-pointer"
                  onClick={()=>{ //showmenu==false?setshowmenu(true):setshowmenu(false);

                         setshowmenu()
                 }}>
                    <h2 className="font-extrabold text-lg ml-2">
                        {item.card.card.title } ({item.card.card.itemCards.length})
                    </h2>
                    <p className="text-3xl font-extrabold mr-3">↓</p>
                 </div>

                   {showmenu && <Itemlist key={item.card.card.title} itemdata={item.card.card.itemCards}/>}
                </div>)


}

export default Restitems