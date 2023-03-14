
import React, { Component } from 'react'
import Balance from '../blance/Balance';

export default class Main extends Component {

    constructor(){
        super();

        this.state = {
            balance: 0,
        }
    }


  render() {
    return (
      <div>
        <Balance balance={this.state.balance}/>
      </div>
    )
  }
}












