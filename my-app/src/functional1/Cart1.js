import React, { Component } from 'react'

export class Cart1 extends Component {
  removecart(){
      this.props.removecart(this.props.prod)
  }
  render() {
    return (
        <div >
        <h1>{this.props.prod.id} </h1>
        <h2> {this.props.prod.qty}</h2>
        {<button onClick={this.removecart.bind(this)}>remove</button> }
      </div>
    )
  }
}

export default Cart1