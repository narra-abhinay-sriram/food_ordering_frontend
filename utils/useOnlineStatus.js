import { useEffect,useState } from "react"

export const useOnlineStatus=()=>{

    const [status,setstatus]=useState(true)

useEffect(()=>{
    window.addEventListener("online",()=>{
        setstatus(true)
    
    
    
    })
    
    window.addEventListener("offline",()=>{
        setstatus(false)
    
    })


},[])


return status


}