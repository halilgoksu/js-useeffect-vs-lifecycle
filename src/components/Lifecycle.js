import React, { Component } from 'react'

class Lifecycle extends Component {
  state={
    counter:0
  }
  componentDidMount(){
    console.log('componentDidMount worked ')
  }
  //render edilir edilmez calisan meethotdur 
  //sedece bir kere calisrir
  //icine bir kere mahsus calistimak istedigimiz elemanlari at 


  componentDidUpdate(prevProps,prevState){
    if(prevState.counter !== this.state.counter)
    console.log("componentDidUpdate worked")
  }
  //bir sey update edilirse (degiseime ugrarsa calisir)
  //icine parameter de eklyebilirz , hangi obje degisirse fonk calisn istyosak 


  //componentWillUnmount(){}

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
