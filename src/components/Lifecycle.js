import React, { Component } from 'react'

class Lifecycle extends Component {
  state={
    counter:0
  }
  componentDidMount(){
    console.log('copmdid min calist ')
  }

  increase=()=>{
    this.setState({counter:this.state.counter +1})
  }
  render() {
    return (
      <div className='lifecycle'>
        <h3>Lifecycle</h3>
        <hr></hr>
        <p>Counter{this.state.counter}</p>
        <button onClick={()=>this.increase()}>Increase</button>

      </div>
    )
  }
}

export default Lifecycle;
