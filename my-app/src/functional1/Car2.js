import React, { Component } from 'react'

export class Car2 extends Component {
  addcart(){
    this.props.addcart(this.props.prod)
  }
  render() {
    return (
      <div >
          <h1>{this.props.prod.id}</h1>
          <button onClick={this.addcart.bind(this)}>add</button>
        </div>
    )
  }
}

export default Car2