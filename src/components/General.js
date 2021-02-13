import React from 'react';

class General extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
    
     editMode = () => {
        return this.state.isInEditMode ?
          this.renderEditView()
          :
          this.renderDefaultView()
      }
      
      render(){
      return( 
        <div>
          <h2>{this.props.value}{this.editMode()}</h2>
        </div>
      )};
    }
  

  export default General