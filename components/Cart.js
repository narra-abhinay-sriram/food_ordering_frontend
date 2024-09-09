import { useSelector,useDispatch } from "react-redux"
import Itemlist from "./Itemlist"
import { clearcart } from "../utils/cartslice"
const Cart=()=>{

    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleclear=()=>{
        dispatch(clearcart())
    }
   // console.log(items)
    return (
<div>
    <div className="flex justify-between">
    <h1 className="font-bold  bg-black text-white rounded-md text-xl ml-96  mt-4 border-2 border-black p-2">Cart-{items.length}</h1>
    
    <button className="mt-4 mr-36 font-bold text-lg bg-black text-white rounded-xl p-2 hover:text-sm"
    onClick={handleclear}>Clearcart</button>
    
    </div>
    <div className="w-auto mt-3 ml-40">
        <Itemlist key={items.name}itemdata={items}/>
    </div>
</div>
    
)
}
export default Cart