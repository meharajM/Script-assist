import React from 'react';
import './style.scss'
function EditableDiv(props) {
return <div contentEditable {...props} ref={props.elementRef}></div>
}
export default EditableDiv;