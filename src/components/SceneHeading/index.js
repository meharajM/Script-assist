import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function SceneHeading(props) {
    const {elementRef, id, onKeyDown, ...rest} = props;
    return <div className="scene-heading">
        <span className="scene-number">Scene {props.sceneNumber}: </span>
        
        <EditableDiv className="int-ext" placeholder="INT/EXT" elementRef={elementRef} id={`${id}-int_ext`} onKeyDown={onKeyDown}/>
        <EditableDiv className="location" placeholder="LOCATION" id={`${id}-location`} onKeyDown={onKeyDown} />
        <EditableDiv className="time" contentEditable={true} placeholder="MORNING/NIGHT" {...rest} onKeyDown={onKeyDown} id={id}></EditableDiv>
        
    </div>;
}

export default SceneHeading;