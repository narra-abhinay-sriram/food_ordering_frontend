import React from "react";

class Userclass extends React.Component{

    constructor(props){

        super(props)

        this.state={
            userinfo:{}
        }
        
    }

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/narra-abhinay-sriram")
    const json=await data.json()
    this.setState({
        userinfo:json
    })
}

render(){


    const{name,location,bio,avatar_url}=this.state.userinfo
return(
    <div className="w-72  bg-orange-200 mt-10 hover:bg-black hover:text-white">
        <div className=" w-full  ">
       <img src={avatar_url} className="h-40 w-full px-2 pt-2 mb-3" />
       </div>
        <h2 className="font-bold text-xl px-2 ">Name- {name}</h2>
        <h2 className="font-bold text-xl px-2">Location-{location}</h2>
        <h2 className="  px-2 mb-10"><b>Bio-</b>{bio}</h2>
        


    </div>
)

}


}

export default Userclass