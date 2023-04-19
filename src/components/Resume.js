import React, { Component } from 'react'

class Resume extends Component {
  render() {
    const {name} = this.props;
    return (
        <h1>This is a class component {name}</h1>
   
    )
    
    }
}

export default Resume;

//to use props for a functional based component, you can only use 'props', while for class base component,
//we use this.props for distructing props 


