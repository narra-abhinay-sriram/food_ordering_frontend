import { render,screen,fireEvent } from "@testing-library/react";
import Headerapp from "../Headerapp";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import appstore from "../../utils/appstore"

test("should check login button in the document",()=>{

render(<BrowserRouter>
<Provider store={appstore}>
    <Headerapp/>
    </Provider>
    </BrowserRouter>)

    const loginbtn=screen.getByRole("button")

    expect(loginbtn).toBeInTheDocument()

})


test("cart element is present or not",()=>{
    render(<BrowserRouter><Provider store={appstore}>

        <Headerapp/>
        
        </Provider></BrowserRouter>)

        const cart=screen.getByText(/🛒-/)//anything between // can be valid if other things will be added with them
        expect(cart).toBeInTheDocument()
})

test("check login button changes to logout on click",()=>{

    render(<BrowserRouter>
    <Provider store={appstore}>
        <Headerapp/>
    </Provider>
    </BrowserRouter>)
const loginbtn=screen.getByRole("button",{name:"login"})
fireEvent.click(loginbtn)
const logoutbtn=screen.getByRole("button",{name:"logout"})
expect(logoutbtn).toBeInTheDocument()
fireEvent.click(logoutbtn)
expect(loginbtn).toBeInTheDocument()

})

