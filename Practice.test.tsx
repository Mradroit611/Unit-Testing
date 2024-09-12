import { render, screen, configure, fireEvent } from '@testing-library/react';
import Practice from './Practice';
import Handlefunction from './Helper';

configure({testIdAttribute: 'id'})

describe("UI testing", ()=>{

  test("input fields testing", () => {
    render(<Practice />);

    // Get all input elements
    // const inputs = screen.getAllByRole("textbox");
    
    // Check that there are two inputs
    // expect(inputs).toHaveLength(2);

    // Check the first input field
    // const [firstInput, secondInput] = inputs;
    // expect(firstInput).toBeInTheDocument();
    // expect(firstInput).toHaveAttribute("name", "username");
    // expect(firstInput).toHaveAttribute("type", "text");
    // expect(firstInput).toHaveAttribute("placeholder", "Enter your name");

    // Check the second input field
    //checking onChange event on input
    // fireEvent.change(secondInput,{target:{value:"a"}});
    // expect(secondInput.value).toBe("a")


    //testing onClick even on button
    // let btn = screen.getByRole("button")
    // fireEvent.click(btn);
    // expect(screen.getByText("sanjay")).toBeInTheDocument();
  });

  test("Method testing using button", ()=>{
    render(<Practice/>);
    const btn = screen.getByTestId("btn2");
    fireEvent.click(btn);
    expect(screen.getByText("Yo ho!")).toBeInTheDocument();
  })

  // test("Functional component method testing", ()=>{
  //   render(<Handlefunction/>)
  //   expect(Handlefunction()).toBe("Hi");
  // })

})


  

test('renders learn react link: App', () => {
  render(<Practice />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument(); 

  // Testing multiple buttons and input fields 
  expect(screen.getByRole("button", {name:"click 1"})).toBeInTheDocument();
  expect(screen.getByRole("button", {name:"click 2"})).toBeInTheDocument();
  expect(screen.getByRole("textbox", {name:"User"})).toBeInTheDocument();

  // Testing Div element 
  expect(screen.getByRole("greeting")).toBeInTheDocument();


  // Testing option element 
  const options = screen.getAllByRole("option");
  for(let i=0; i<options.length; i++ ){
    expect(options[i]).toBeInTheDocument();
  }


  // Testing input element using id 
  const inputts = screen.getByTestId("input");
  expect(inputts).toBeInTheDocument();

  // Testing text area 
  const textarea = screen.getByDisplayValue("Feedback");
  expect(textarea).toBeInTheDocument();
  const textarea2 = screen.getByDisplayValue("textarea");
  expect(textarea2).toBeInTheDocument();

  //Testing of span tag using title
  const span = screen.getByTitle("message");
  expect(span).toBeInTheDocument();

});
