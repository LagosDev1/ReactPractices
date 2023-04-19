import React, { Component } from 'react'

class Welcome  extends Component {
    //in class components we use "this.props" keyword to access the properties
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }

}

export default Welcome;


