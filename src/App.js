import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import General from './components/General';

document.body.style.backgroundColor = "#ccc";

class App extends Component{

  state = {
    value: "Text here",
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }
  
  renderEditView = () => {
    return <div>
        <input type="text"
        defaultValue="Text goes here"
        >
        </input>
      </div>
  }

  renderDefaultView = () => {
  return <div onDoubleClick={this.changeEditMode}>
  {this.state.value}
  </div>
  }

  userInputArea = () => {
    return this.state.isInEditMode ?
    this.renderEditView
    :
    this.renderDefaultView

  }
  render(){
  return(
    <div className="App">
      <Header></Header>
      <General></General>
      
    </div>
  )};
}

export default App;
