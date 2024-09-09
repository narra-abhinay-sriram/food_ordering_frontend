import { useEffect, useState } from "react";
import { Restcontain ,withlocality} from "./Restcontain";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { Usercontext } from "./Usercontext";
import { useContext } from "react";
const Body=()=>{

    let [newwrestobj,setrestobj]=useState([])
    let [dummyrest,setdummyrest]=useState([])
    let [searchval,setsearch]=useState()
    const {loginuser}=useContext(Usercontext)

                useEffect(()=>{
                                 fetchdata();
                               },[])

           const fetchdata= async ()=>{
                                         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  
                                         const datajson=await data.json()
                                         const restaurants = datajson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                                         
                                          setrestobj(restaurants)
                                          setdummyrest(restaurants)
                                         
                                          
                                        }
              const Localityname=withlocality(Restcontain)

return (
      <div className="bg-amber-100">
        <div className=" h-10 flex justify-between mt-5 mb-20 shadow-md bg-orange-300 ">
       <div className=" px-6 mt-1 ml-3 mb-3 rounded-md text-gray-50 font-bold">
          <button  className=" px-2 bg-orange-400 hover:bg-black hover:text-lg rounded-md " 
                          onClick={ 
                                      ()=>
                                            {
                                              const filteredList=newwrestobj.filter((res)=>(res.info.avgRating>4.5))
                                                 setdummyrest(filteredList)
                                             }
    
                                  }> 🏠Restaurants above 4.5 rating</button>
          </div>
         
        <div>
          <input data-testid="searchin" className="bg-slate-700 py-3 rounded-lg text-white font-mono max-h-1 w-40 mr-3" type="text" value={searchval} onChange={(e)=>{
                                         setsearch(e.target.value)
                                       }}/>

          <button className="mr-4 bg-white text-black px-2 mt-1 font-semibold hover:bg-black hover:text-white border-black rounded-md "  onClick={()=>{
                                      serachedres=  newwrestobj.filter((res)=>res.info.name.toLowerCase().includes(searchval))
                                    setdummyrest(serachedres)
                                 }
                            }
          >Search
          </button>
        </div>
         </div>
                <div className="flex flex-wrap ml-2 mr-2 py-2 justify-center shadow-inner shadow-rose-950">
  
                    { 
       
                         dummyrest.map((res)=>(
                         <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
                          <Localityname resdata={res}/>
                          </Link>))
           
           
                      }
       
  
                 </div>
       </div>)
  }

  export default Body;