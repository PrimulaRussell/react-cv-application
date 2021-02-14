import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import EditableField from './components/Edit';

document.body.style.backgroundColor = "#ccc";

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){

  return(
    <div className="App">
    <Header></Header>
    <EditableField 
    value={"Name"} />
    </div>
  )}
}

export default App;
