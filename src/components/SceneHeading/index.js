import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function SceneHeading(props) {
    const { onKeyPress} = props;
    return <div className="scene-heading">
                
        <EditableDiv className="int-ext" placeholder="INT/EXT" />
        <EditableDiv className="location" placeholder="LOCATION"/>
        <EditableDiv className="time" contentEditable={true} onKeyPress={onKeyPress} placeholder="TIME ex: MORNING, NIGHT"></EditableDiv>
        
    </div>;
}

export default SceneHeading;