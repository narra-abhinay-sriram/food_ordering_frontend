import { useContext } from "react"
import { Usercontext } from "./Usercontext"

export const Contact=()=>{

    const {loginuser,setuser}=useContext(Usercontext)
    

    return(
        <div>
            <h1>contact us page</h1>
            <h2>{loginuser}</h2>
            <label className="font-bold">Username:
            <input className="border border-gray-500 mt-2" onChange={(e)=>{
                setuser(e.target.value)
            }}  /></label>
            
        </div>

    )
}