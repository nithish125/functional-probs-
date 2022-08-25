import React, { Component } from 'react'
import Car2 from './Car2'
import Cart1 from './Cart1'
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
  removecart=(remov)=>{
     console.log(remov.qty)
  let a=this.state.cart
  var found=a.includes(remov)
  if(found){
    var ind=a.indexOf(remov)
    a.splice(ind,1)
    remov.qty=1
    this.setState({...a})
  }


  }
  render() {
    return (
      <div>Aart
        {this.state.product.map((prod, index) =>
          
          <Car2 key={index} prod={prod} addcart={this.addcart}  />
        )}
        {this.state.cart.map((prod, index) =>
          <Cart1 key={index} prod={prod} removecart={this.removecart} />
        )}

      </div>
    )
  }
}

export default Aart