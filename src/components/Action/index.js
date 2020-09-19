import React, {useState} from 'react';
import {shouldShowOptions} from '../../utils/appUtils';


import EditableDiv from '../EditableDiv';
import './style.scss';
function Action(props) {
    const {content, onKeyDown, onContentChange, toggleElementOptions, ...rest} = props;
    const [actionValue, setActionValue] = useState(content[props.id]);
    return (<div className="action">
       
         <EditableDiv
         placeholder="Action"
         value={actionValue}
         onBlur={() => {onContentChange(props.id, actionValue)}}
         onKeyDown={(ev) => {
             if(shouldShowOptions(ev)) {
                toggleElementOptions();
             }
             setActionValue(ev.currentTarget.innerHTML)
            }}
         {...rest}
         />
    </div>)
}

export default Action;