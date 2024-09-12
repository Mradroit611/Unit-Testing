import { SetStateAction, useState } from "react";
import Handlefunction from "./Helper";

const Practice = () => {
    const [data, setData] = useState<string>("");
    const [greet, setGreet] = useState<string>("Hello!");

    // UI component 
    const Greet = (msg: SetStateAction<string>)=>{
       setGreet(msg)
    }  

    // Functional component 
    // const Handlefunction = ()=>{
    //     console.log("hi")
    //   return "Hi"
    // }

    return (
      <>
      <div className="App">
        <p>Learn React</p>
        <input type='text' id='name' name='username' placeholder='Enter your name'/>
        <input type='text' value={data} onChange={(e)=>{setData(e.target.value)}}/>
        <button onClick={()=>{setData("sanjay")}}>Hello</button>
        <h4>{data}</h4>
        <button id="btn2" onClick={()=>{Greet("Yo ho!")}}>Pass</button>
        <h5>{greet}</h5>
        <button onClick={Handlefunction}>Greet</button>
        <br/>
        <img alt='React image1' title='React image' src='https://img-b.udemycdn.com/course/750x422/1221442_4630.jpg'/>
      </div>

      {/* Multiple buttons and input fields  */}
      <button>click 1</button>
      <button>click 2</button>
      <label htmlFor="text1">User</label>
      <input type="text" id="text1"/>
      <label htmlFor="text2">Name</label>
      <input type="text" id="text2"/>


      {/* Div element  */}
      <div role="greeting">Hello</div>


      {/* Option ELement  */}
      <select>
        <option>Hello</option>
        <option>2</option>
        <option>3</option>
      </select>

      {/* Input field using id  */}
      <input id="input" type="text" />

      {/* Text area */}
      <textarea name="" id="">Feedback</textarea>
      <textarea name="" id="" defaultValue={"textarea"}></textarea>

      <span title="message">Good Morning!</span>
      </>
    );
}

export default Practice;
