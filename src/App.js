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
    <div className="Box">
    <div className="General">
    <div className="generalName">
    <EditableField 
    value={"First Name"} />
    <EditableField 
    value={"Last Name"} />
    </div>
    <div className="generalContact">
    <EditableField 
    value={"Email"} />
    <EditableField 
    value={"Phone Number"} />
    </div>
    </div>
    <h1>Education</h1>
    <div className="Education">
    <EditableField value={"School Name"}></EditableField>
    <EditableField value={"Title of Study"}></EditableField>
    <EditableField value={"Date of Study"}></EditableField>
    </div>
    </div>
    </div>
  )}
}

export default App;
