import React from 'react';

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
    
   renderEditView = () => {
      return <div>
          <input type="text"
          defaultValue={"Add your " + this.props.value.toString().toLowerCase() + " here!"}
          >
          </input>
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