import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import EditableField from './components/Edit';
import Education from './components/Education';
import AddEdu from './components/AddEdu';
import Experience from './components/Experience';
import AddExp from './components/AddExp';



document.body.style.backgroundColor = "#ccc";

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  addEdu = () => {
    return <Education></Education>
  }
  
  render(){

  return(
    <div className="App">
    <Header></Header>
    {/* Wraps all information inputs */}
    <div className="Box">
    {/* Section that takes your basic info */}
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
    {/* Section that takes your educational background info */}
    <h1>Education</h1>
    <Education></Education>
    {/* Creates another education section */}
    <AddEdu></AddEdu>
    <h1>Experience</h1>
     {/* Section that takes your professional background info */}
    <Experience></Experience>
     {/* Creates another experience section */}
    <AddExp></AddExp>
    </div>
    </div>
  )}
}

export default App;
