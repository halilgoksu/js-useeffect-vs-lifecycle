import React, { Component } from "react";

class Lifecycle extends Component {
  state = {
    counter: 0,
    counter2: 0,
    timer: 0,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.counter !== this.state.counter)
  //     console.log("componentDidUpdate worked");
  //   else if (prevState.counter2 !== this.state.counter2) {
  //     console.log("lifecycel Counter2 did update");
  //   }
  // }
  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Lifecycle Timer: ", this.state.timer);
  }

  componentWillUnmount() {
    clearInterval(this.myTimer);
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  increase2 = () => {
    this.setState({ counter2: this.state.counter2 + 1 });
  };

  render() {
    return (
      <div className="lifecycle">
        <h3>Lifecycle</h3>
        <hr></hr>
        <p>Counter : {this.state.counter}</p>
        <button onClick={() => this.increase()}>Increase</button>
        <p>------------</p>
        <p>Counter2 : {this.state.counter2}</p>
        <button onClick={() => this.increase2()}>Increase2</button>
      </div>
    );
  }
}

export default Lifecycle;
