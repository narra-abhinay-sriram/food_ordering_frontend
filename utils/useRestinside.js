import { fetch_url} from "./urls";
import { useEffect ,useState} from "react";

const useRestinside=(restid)=>{
    const [restinfo,setrestinfo]=useState(null)

    useEffect(()=>{
        fetchdata();
    },[])

const fetchdata=async ()=>{
    const data= await fetch(fetch_url+restid)
    const datajson=await data.json()
  setrestinfo(datajson.data)
}
return restinfo
}

export default useRestinside