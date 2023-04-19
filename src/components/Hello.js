
import React from 'react'

const Hello = () => {
    //This is the JSX version of the hello component 
    // return (
    //     <div>
    //         <h1>Hello Godspower</h1>    
    //     </div>
    // )
    // Rewriting the components without using JSX
    return React.createElement(
    'div',
    {id: 'Hello', className: 'dummyClass'},
    React.createElement('div', null, <h1>Introduction</h1>) 
   // Or you can use this  return React.createElement('div', null, React.createElement('h1', null, 'This is Godpower'))
        
   )
}

export default Hello