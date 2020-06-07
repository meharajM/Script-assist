import React from 'react';
import './style.scss'
function EditableDiv(props) {
return <div contentEditable {...props}></div>
}
export default EditableDiv;