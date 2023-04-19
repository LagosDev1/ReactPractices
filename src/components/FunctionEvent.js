import React from 'react'

function FunctionEvent() {
    //You are to create a Funtions for funtional based components
    const handleClick = ()=>{
      console.log("Button Clicked")
    }
  return (
    <div>
        Funtional Component
        <button onClick={handleClick}>Click here</button>
    </div>
  );
}






export default FunctionEvent;

//This is how you handle an "onClick" event in a functional based component
//Note that the 'onClick' should be on cammel case cause its in React and not a regular javascript