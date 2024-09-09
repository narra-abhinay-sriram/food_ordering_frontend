import { additem, removeitem } from "../utils/cartslice"
import { Rest_url } from "../utils/urls"
import { useDispatch } from "react-redux"


const Itemlist=({itemdata})=>{
   // console.log(itemdata)

   const dispatch=useDispatch()
   const doubledispatch=useDispatch()

   const handlecart=(item)=>{
    dispatch(additem(item))
   }
   const handleremove=(item)=>{
       dispatch(removeitem(item)) 
   }

    return (
        <div className="ml-10">
           {itemdata.map((item)=>(
            <div key={item.card.info.id} className="ml-40 mr-32">
               <div className="">
                <p className="font-bold text-gray-600 text-lg">{item.card.info.name}</p>
                <p className="text-black text-base">₹{item.card.info.price ?item.card.info.price/100:item.card.info.defaultPrice/100}</p>
                </div>
                <div className="text-gray-500 flex mt-3 ">
                    <span className="text-gray-500 w-7/12 ">{item.card.info.description}</span>
                <div className="w-2/12 mb-3 rounded-md">
               
                <img className="rounded-md ml-16"
                src={Rest_url+ item.card.info.imageId}/>
                 <button className="mb-5 ml-32 absolute text-green-700 bg-white font-bold hover:bg-green-500 hover:text-white p-2 "
                 onClick={()=>handlecart(item)}>Add+</button>
                  <button className="mb-5 ml-28 mr-20  absolute text-green-700 bg-white font-extrabold text-lg hover:bg-green-500 hover:text-white p-2 "
                onClick={()=>handleremove(item)} >-</button>
                </div>
                </div>

                  <hr className="mt-4"></hr>
           </div>
        ))}
        </div>
    )

}

export default Itemlist