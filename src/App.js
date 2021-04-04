import React, {Component} from 'react';
import './App.css';
import SumComponent from './components/SumComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      sum: ""
    }
  }

  onClick =  button => {
    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }

    else if(button === "CE"){
      this.backspace()
    }

    else {
      this.setState({
        sum: this.state.sum + button

      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line no-eval
        sum : (eval(this.state.sum) || "" ) + ""
      })
    } catch (e){
      this.setState({
        sum: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      sum: ""
    })
  };

  backspace = () => {
    this.setState({
      sum: this.state.sum.slice(0, -1)
    })
  };

  render(){
    return (
      <div>
        <div className="calculator-body">
          <h1>Kimbrowslice's Calculator</h1>
          <SumComponent sum={this.state.sum}/>
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}
export default App;
