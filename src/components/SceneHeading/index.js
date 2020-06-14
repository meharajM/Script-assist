import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function SceneHeading(props) {
    return <div className="scene-heading">
        <span className="scene-number">Scene {props.sceneNumber}: </span>
        
        <EditableDiv className="int-ext" placeholder="INT/EXT" />
        <EditableDiv className="location" placeholder="LOCATION"/>
        <EditableDiv className="time" contentEditable={true} placeholder="MORNING/NIGHT" {...props}></EditableDiv>
        
    </div>;
}

export default SceneHeading;