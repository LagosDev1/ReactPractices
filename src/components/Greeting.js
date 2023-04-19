import React from 'react'

const Greeting = (props) => {
    //console.log(props)
    return(
    // in functional expressions we use props
    <div>
     <h1>My name is {props.name} a.k.a {props.heroName}</h1>
     {props.children}
     </div>
     )
}
 

export default Greeting;