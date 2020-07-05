import React from 'react';
import ContentEditable from 'react-contenteditable'
import './style.scss'
function EditableDiv(props) {
    const {value, elementRef, ...rest} = props;

    return <ContentEditable
              innerRef={elementRef}
              html={`${value || ''}`} // innerHTML of the editable div
            //   disabled={false}       // use true to disable editing
            //   onChange={props.onKeyDown} // handle innerHTML change
              tagName='div'
              {...rest}
              />
//     if (props.value) {
//     return <div contentEditable {...rest} ref={elementRef}>{value}</div>
//     }
// return <div contentEditable {...props} ref={props.elementRef}></div>
}
export default EditableDiv;