// import { fireEvent, render ,screen} from "@testing-library/react"
// import { act } from "react"
// import { BrowserRouter } from "react-router-dom"
// import Body from "../Body"
// import Mock_data from "../mockdata/restcard_mock.json"
// import "@testing-library/jest-dom"

// global.fetch=jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve(Mock_data)
//         }
//     })
// })


// test("body search test",async()=>{
//     await act(async ()=>{
//         render(<BrowserRouter><Body/></BrowserRouter>)
//     })

//     const sbutton=screen.getByRole("button",{name:"Search" })
//     const input=screen.getByTestId("searchin")
//     fireEvent.change(input,{target:{value:"biryani"}})
//     fireEvent.click(sbutton)
//     const count=screen.getByTestId("rescard")
//     expect(count).toBeInTheDocument()
    
    
// })