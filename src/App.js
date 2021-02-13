import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import General from './components/General';

document.body.style.backgroundColor = "#ccc";

class App extends Component{
  render(){
  return(
    <div className="App">
    <Header></Header>
    <General></General>
    </div>
  )}
}

export default App;
