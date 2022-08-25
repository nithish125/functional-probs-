import React, { Component } from "react";
export class State1 extends Component {
  constructor() {
    super();
    this.state = {
      // title  : 'reactJs'
      cart:[],
      data: [
        {
          id:"name",
          qty:"1",
          head: "Serve your customers online",
          parag:
            "Create an eye-catching menu and get ready to start taking online orders & reservations. ",
        },
        {
          id:"pizza",
          qty:"q",
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
        {
          id:"dosa",
          qty:"1",
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
        {
          id:"idli",
          qty:"1,",
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
      ],
    };
  }
  render() {
    return <div className="testy-part">
      <h1>TESTY MENU</h1>
      <div className="prac-state">{this.state.data.map((ele, ind) => (

        <State2 key={ind}val1={ele.id} val2={ele.qty} val3={ele.head} val4={ele.parag} />

      ))}
      </div>
    </div>
  }
}

export class State2 extends Component {
  add() {
    console.log(this);
    const replace = this.state.data.find((item) => item.id === data.id);
    console.log("replace", replace);
    if (replace) {
      const temp =this. state.data.map((item) => {
        if (item.id === data.id) {
          item.qty += 1;

          
        } 
      });
    }
    }

    render() {

      // add()
      return (
        <div className="div-part">
       <h2>{this.props.val1}</h2>
       <p>{this.props.val2}</p>
          <h1>{this.props.val3}</h1>
          <p>{this.props.val4}</p>
          <div className="btn-part">
            <button onClick={() => this.add()}>Add to cart</button>
          </div>
        </div>
      )

    }

  }

