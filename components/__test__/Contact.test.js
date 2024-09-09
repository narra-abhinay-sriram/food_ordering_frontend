import {Contact }from "../Contact"
import {  render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
test("contact ",()=>{

    render(<Contact/>)

    const input=screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
})

test("contact header",()=>{
    render(<Contact/>)
    const  headings =screen.getAllByRole("heading")
    expect(headings.length).toBe(2)
})