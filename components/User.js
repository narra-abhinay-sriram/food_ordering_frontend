const User=(props)=>{

    const {name,location,age}=props
    return(
        <div>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>{age}</h2>
        </div>
    )
}
export default User