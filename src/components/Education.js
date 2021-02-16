import React from 'react'
import '../styles/Education.css'
import EditableField from '../components/Edit'

const Education = (props) => {
    return (
    <div className="Education">
    <EditableField value={"School Name"}></EditableField>
    <EditableField value={"Title of Study"}></EditableField>
    <EditableField value={"Date of Study"}></EditableField>
    </div>
    )
}

export default Education;