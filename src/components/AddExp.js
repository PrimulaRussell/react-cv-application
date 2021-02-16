import React, { Component } from 'react';
import Experience from '../components/Experience'

class AddExp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             numExp: 0
        }
    }
    onAddExp = () => {
    this.setState({
    numExp: this.state.numExp + 1
    });
    }
    
    render() {
    const exp = [];

    for (var i = 0; i < this.state.numExp; i += 1) {
    exp.push(<Experience/>);
    };

    return (
    <div>
    {exp}
    <button onClick={this.onAddExp.bind(this)}>+ ADD</button>
    </div>
    )
    }
    }


export default AddExp;