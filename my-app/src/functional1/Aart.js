import React, { Component } from 'react'
import Car2 from './Car2'
import Cart1 from './Cart1'
import './aart.css'
export class Aart extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      product: [
        { id: "car", qty: 1, model: "polero" }, { id: "mobile", qty: 1, model: "lenova" }, { id: "cycle", qty: 1, model: "hero" }

      ]
    }
  }
add=(data1)=>{
  data1.qty++
  this.setState({ cart: [...this.state.cart]  });
}
  addcart = (data) => {
    
    console.log(data)
    let a = this.state.cart
    console.log(a);
    const x=a.includes(data)
    console.log(x)
    //const replace=this.state.cart.find((item)=>item.id===data.id);
    
if(x==false){
      this.setState({ cart: [...this.state.cart, data]  });   
}
else{
   data.qty=data.qty+1
  this.setState({ cart: [...this.state.cart]  });
}//console.log((this.state.cart))
  }
  removecart1=(remov1)=>{
    let removele=this.state.cart.filter((val)=>{
     return val != remov1
    })
    this.setState({cart:removele})
  }
  removecart=(remov)=>{
     let removele=this.state.cart.filter((val)=>{
      return val != remov
     })
     if((remov.qty)<=1){
     this.setState({cart:removele})
     }
     else{
      remov.qty=remov.qty-1
  this.setState({ cart: [...this.state.cart]  });
     }
  }
  render() {
    return (
      <div className='container'>Aart
      <div  className=' parent1'>
        {this.state.product.map((prod, index) =>
          
          <Car2 key={index} prod={prod} addcart={this.addcart}  />
        )}
        </div>
        <div className='child1'>
        {this.state.cart.map((prod, index) =>
          <Cart1 key={index} prod={prod} removecart1={this.removecart1} add={this.add} removecart={this.removecart} />
        )}
        </div>

      </div>
    )
  }
}

export default Aart