import React from 'react';
import '../styles/Edit.css'

class EditableField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        value: this.props.value,
        isInEditMode: false
      }
    }
    changeEditMode = () => {
      this.setState({
        isInEditMode: !this.state.isInEditMode
      })
    }
    
    updateComponentValue = () => {
      this.setState({
        isInEditMode: false,
        value: this.refs.theTextInput.value
      })
    }

   renderEditView = () => {
      return <div className="Input">
          <input className="textInput"
          type="text"
          defaultValue={"Add your " + this.props.value.toString().toLowerCase() + " here!"}
          ref="theTextInput"
          >
          
          </input>
          <button className="button" onClick={this.changeEditMode}>X</button>
          <button className="button" onClick={this.updateComponentValue}>OK</button>
          
        </div>
    }
  
   renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
    {this.state.value}
    
    </div>
    }
  
   editMode = () => {
      return this.state.isInEditMode ?
        this.renderEditView()
        :
        this.renderDefaultView()
    }
      render(){
      return( 
        <div>
          <h2>{this.editMode()}</h2>
        </div>
      )};
    }
  

  export default EditableField