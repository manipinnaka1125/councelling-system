import React, { Component } from 'react'

export class Counter extends Component {
  constructor() {
    super()
    this.state={
        count:0
    }
  }
  increment(){
this.setState({
    count:this.state.count+1
},()=>console.log("callback value"+this.state.count))
console.log(this.state.count)
  }
  render(){
    return(
<div>
    <center>
        <h1>Counter{this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
    </center>
</div>
    )
  }
}

export default Counter