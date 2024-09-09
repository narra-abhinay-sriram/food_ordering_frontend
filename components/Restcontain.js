import { Rest_url } from "../utils/urls";

export const Restcontain=(props)=>{
    const {resdata}=props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
locality
    }=resdata?.info

    return (

        
     <div data-testid="rescard" className="w-64 h-96 bg-rose-300 m-3 px-2 py-2 rounded-md shadow-xl shadow-rose-400 hover:bg-black hover:text-white hover:shadow-black">
         
            <div className="">
               <img 
                   className="w-[250px] px-1 py-1 h-[170] rounded-lg"
                     src={Rest_url  +
                                      cloudinaryImageId}
                    />
                    <h2 className="font-semibold text-lg mb-2" >{name}</h2>
                     <h3 className="  text-sm">{cuisines.join(",")}</h3>
                     <h3 className="text-base font-medium">{costForTwo } for two</h3>
                     <h2 className=" mt-5 text-center"><b>Rating</b>-<b>{avgRating}</b></h2>
            
             </div>
          
    
    </div>

    
     
    )
}

export const withlocality=(Restcontain) =>{

    return (props)=>{
      //  console.log(props)
        const {resdata}=props
        return(
            <div>
            <label className="absolute bg-red-300 text-sm text-black rounded-md font-bold  ">{resdata.info.locality}</label>
            <Restcontain {...props}/>
            </div>
        )

    }
}

