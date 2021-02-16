import React from 'react'
import '../styles/Fields.css'
import EditableField from '../components/Edit'

const Experience = (props) => {
    return (
    <div className="Field">
    <EditableField value={"Company Name"}></EditableField>
    <EditableField value={"Position Title"}></EditableField>
    <EditableField value={"Responsibilities"}></EditableField>
    <EditableField value={"Start"}></EditableField>
    <EditableField value={"End"}></EditableField>
    </div>
    )
}

export default Experience;