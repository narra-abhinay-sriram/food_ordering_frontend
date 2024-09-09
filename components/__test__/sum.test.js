import { sum } from "../sum";

test("testing sum of two numbers",()=>{

    const res=sum(4,3)
    expect(res).toBe(7)
})