import { useState } from "react";
//how to use state in a functional Component
function FunctionalCounter() {
    const [counter, setCounter] = useState(0); //We can pass in the defualt value of counter within the useState 

 
    const increment = ()=>{
        setCounter(counter+1);

    }
    const decrement = ()=>{
        if(counter===0){
            return;
        }
        setCounter(counter-1);
    }

   const reset = ()=>{
    setCounter(0);
   }


    return <div>   
        <div class="counterText">Counter value: {counter}</div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
}

export default FunctionalCounter;