import sum from "./sum"

beforeEach(()=>{
    console.log("---before each -----");
})

beforeAll(()=>{
    console.log("----before all -------")
})

afterEach(()=>{
    console.log("---- after each ------")
})

afterAll(()=>{
    console.log("---- after all ------")
})

test("testing for sum function 1", ()=>{
    expect(sum(10,10)).toBe(20)
    console.log("function 1")
})
test("testing for sum function 2", ()=>{
    expect(sum(10,10)).toBe(20)
    console.log("function 2")

})