import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }

// increment
increment(){
    this.setState({
        count: this.state.count + 1
    })
    console.log(this.state.count)
}
//  Decrement
decrement(){
  this.setState({
    count: this.state.count - 1
  })
 
   console.log(this.state.count)
}
// render function
  render() {
    return(
        <div>
        <div>Count - {this.state.count} </div>
        <button onClick={()=>this.decrement()}>Decrement</button>
        <button onClick={()=>this.increment()}>Increment</button>
        </div>
    ) 

  }
}

export default Counter
