import React, { Component } from 'react';
import './App.css';
import Counter from './comps/counter';

class App extends Component {
  state = { myDate: "2023-12-25" }
  userInput = React.createRef();

  changeDate = () => {
    //this.myDate = "2023-10-22";
    //this.forceUpdate();
    //alert(this.refs.id_input.value);
    this.setState({ myDate: this.userInput.current.value })
  }

  render() {
    return (
      <div className="App">
        <Counter appDate2={this.state.myDate}></Counter>

        <input ref={this.userInput} type="date" defaultValue="2023-09-01" />
        <button onClick={this.changeDate} className='btn btn-success'>change</button>
      </div>
    )
  }
}

export default App;
