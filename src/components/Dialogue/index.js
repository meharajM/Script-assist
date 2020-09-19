import React, {useState} from 'react';
import EditableDiv from '../EditableDiv';
import {shouldShowOptions} from '../../utils/appUtils';

import './style.scss';
function Dialogue(props) {
    const {content, onKeyDown, onContentChange, toggleElementOptions, ...rest} = props;
    const [dialogueValue, setDialogueValue] = useState(content[props.id]);
    
    return (<div className="dialogue">
        <div className="dialogue-container">
            <EditableDiv
            placeholder="Dialogue"
            {...props}
            value={dialogueValue}
            onBlur={() => {onContentChange(props.id, dialogueValue)}}
            onKeyDown={(ev) => {
             if(shouldShowOptions(ev)) {
                toggleElementOptions();
             }
             setDialogueValue(ev.currentTarget.innerHTML)
            }}
            />
        </div>
    </div>)
}
export default Dialogue;