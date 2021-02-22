import React, { useState } from "react";
import Education from '../components/Education'

const AddEdu = () => {
    const [num, setNum] = useState(0);

    let addSchool = () => {
        setNum(num + 1);
        }
    
    let schools = [];

    for (var i = 0; i < num; i += 1) {
        schools.push(<Education/>);
        };

    
           
    return (
    <div>
    {schools}
    <button onClick={addSchool}>+ ADD</button>
    </div>
    )
};
    
    


export default AddEdu;