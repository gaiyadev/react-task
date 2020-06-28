import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: 'Obed', age: Math.floor(Math.random() * 30) },
        { name: 'Jude', age: Math.floor(Math.random() * 30) },
        { name: 'Epa', age: Math.floor(Math.random() * 90) }
      ]
    }
  }

  switchNameHandler = () => {
    this.setState({
      person: [
        { name: 'Obed M', age: Math.floor(Math.random() * 30) },
        { name: 'Jude G', age: Math.floor(Math.random() * 30) },
        { name: 'Epaphras', age: Math.floor(Math.random() * 90) }
      ]
    })
    console.log('btn clicked');
  }

  render() {
    return (
      <div className="App" >
        <br />
        <button onClick={this.switchNameHandler} style={{ backgroundColor: 'grey', color: 'white' }} >Click me</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} >I love raping </Person>
      </div>
    );
  }
}

export default App;
