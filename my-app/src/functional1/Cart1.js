import React, { Component } from 'react'

export class Cart1 extends Component {
  removecart(){
      this.props.removecart(this.props.prod)
  }
  add(){
    this.props.add(this.props.prod)
  }
  removecart1(){
    this.props.removecart1(this.props.prod)
  }
  render() {
    return (
        <div >
        <h1>NAME :{this.props.prod.id} </h1>
        <h2>qty : {this.props.prod.qty}</h2>
        <button onClick={this.removecart.bind(this)}>-</button> 
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.removecart1.bind(this)}>remove</button>
      </div>
    )
  }
}

export default Cart1