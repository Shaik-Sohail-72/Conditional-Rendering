import React from "react";
import Login from "./Login";

var isLoggedin=false;
const date=new Date(2020,5,3,1);
var ch=date.getHours();

function App() {
  return (
    <div className="container">

     {
       //ternary operator
     isLoggedin ? <h1>Hello</h1> : <Login />
     //AND operator
      //<h1>12 && <h1>why your are doing so much hardwork</h1> 
     }
    </div>
  );
}

export default App;
