import React from 'react';
import './App.css';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <Person name="Gaiya M." age="45" />
      <Person name="Gaiya M." age="55" />
      <Person name="Gaiya M." age="55" >I love raping </Person>
    </div>
  );
}

export default App;
