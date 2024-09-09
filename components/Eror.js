import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return (
        <div>
            <h2>{err.status}</h2>
            <h1>{err.statusText}</h1>
        </div>
    )
}

export default Error