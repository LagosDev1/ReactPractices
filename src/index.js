import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Profile from './components/profile';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <React.StrictMode>
  <FunctionalCounter></FunctionalCounter>
  
  {/* <ClassEvent></ClassEvent> */}
  {/* <FunctionEvent></FunctionEvent> */}
  {/* {/* <Message /> */}
  {/* <Counter /> */}
  {/* <Profile name="Godspower" lastname="Abah"></Profile> */}
  {/* <Resume name="Geepee"></Resume>  */} 
  {/* <App /> */}
  {/* <Greeting name="Bruce" heroName= "Batman"> */}    {/* <p>This is My first SuperHero</p> */}
  {/* </Greeting> */}
  {/* <Greeting name="Clark" heroName="Superman"> */}
  {/* <button>Action</button> */}
  {/* </Greeting> */}
  {/* <Greeting name="Diana" heroName="Wonder-Woman"/> */}
  {/* using props for a class component */}
  {/* {/* <Welcome name="Bruce" heroName= "Batman"/>
   <Welcome name="Clark" heroName="Superman"/>
   <Welcome name="Diana" heroName="Wonder-Woman"/> */}

  {/* <Hello/> */}

  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//props and state is used to alter or manipulate what is being rendered on the screen


