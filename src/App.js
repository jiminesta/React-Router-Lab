import Routes from './Routes'
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Routes />
    </div>
  );
}
}
// npx install --save react-router-dom
export default App;