import React, { useState } from 'react';
import Experience from '../components/Experience'

const AddExp = () => {
    const [num, setNum] = useState(0);
        
    let AddExp = () => {
    setNum(num + 1);
    }
    
    const exp = [];

    for (var i = 0; i < num; i += 1) {
    exp.push(<Experience/>);
    };

    return (
    <div>
    {exp}
    <button onClick={AddExp}>+ ADD</button>
    </div>
    )
    }
    


export default AddExp;