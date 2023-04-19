import React, { Component } from 'react'

class ClassEvent extends Component {
   //You are to create a method for Class based components
    handleClick(){
        console.log('Class based event handling')
    }

  render() {
    return (
      <div>
        This is a class based component
        <button onClick={this.handleClick}>Click</button>
        
      </div>
    )
  }
}

export default ClassEvent;


//For class component you need to include 'this'
