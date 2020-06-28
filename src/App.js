import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import UserOutput from './components/UserOutput/UserOutput';
import UerInput from './components/UserInput/Userinput';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: 'Obed', age: Math.floor(Math.random() * 30) },
        { name: 'Jude', age: Math.floor(Math.random() * 30) },
        { name: 'Epa', age: Math.floor(Math.random() * 90) }
      ],
      info: [
        { username: "OBED" }
      ]
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Jude G', age: Math.floor(Math.random() * 30) },
        { name: 'Epaphras G', age: Math.floor(Math.random() * 90) }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "OBD", age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Epaphras G', age: Math.floor(Math.random() * 90) }
      ]
    });
  }
  checkedName = (event) => {
    this.setState({
      person: [
        { name: "OBED", age: Math.floor(Math.random() * 30) },
        { name: "Precious", age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 90) }
      ]
    })
  }

  changeUsernameHandler = (event) => {
    this.setState({
      info: [
        { username: event.target.value }
      ]
    });
  }
  render() {

    return (
      <div className="App" >
        <br />
        <button
          onClick={this.switchNameHandler.bind(this, "Gaiya M Obed")}
          style={{ backgroundColor: 'grey', color: 'white' }}
        >Click me
        </button>
        <Person
          click={() => this.switchNameHandler('Gaiya Mathias')}
          name={this.state.person[0].name}
          age={this.state.person[0].age} />
        <Person
          checked={this.checkedName}
          name={this.state.person[1].name}
          age={this.state.person[1].age} />
        <Person
          changeName={this.nameChangeHandler}
          name={this.state.person[2].name}
          age={this.state.person[2].age} >I love raping </Person>

        {/* Beginning of the assignment */}
        <div className="hw">
          <UerInput
            currentValue={this.state.info[0].username}
            changed={this.changeUsernameHandler} />
          <UserOutput username={this.state.info[0].username} />
          <UserOutput username={this.state.info[0].username} />
          <UserOutput username={this.state.info[0].username} />
        </div>
      </div>
    );
  }
}

export default App;
