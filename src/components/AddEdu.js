import React, { Component } from 'react';
import Education from '../components/Education'

class AddEdu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             numEdu: 0
        }
    }
    onAddSchool = () => {
    this.setState({
    numEdu: this.state.numEdu + 1
    });
    }
    
    render() {
    const schools = [];

    for (var i = 0; i < this.state.numEdu; i += 1) {
    schools.push(<Education/>);
    };

    return (
    <div>
    {schools}
    <button onClick={this.onAddSchool.bind(this)}>+ ADD</button>
    </div>
    )
    }
    }


export default AddEdu;