import React from 'react';
import './style.scss'
function EditableDiv(props) {
    if (props.value) {
        const {value, elementRef, ...rest} = props;
    return <div contentEditable {...rest} ref={elementRef}>{value}</div>
    }
return <div contentEditable {...props} ref={props.elementRef}></div>
}
export default EditableDiv;