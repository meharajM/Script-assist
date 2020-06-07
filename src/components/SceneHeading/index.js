import React from 'react';
import Button from '@material-ui/core/Button';
import EditableDiv from '../EditableDiv'
import './style.scss';
function SceneHeading(props) {
    const {addAction} = props;
    return <div className="scene-heading">
                
        <EditableDiv className="int-ext" placeholder="INT/EXT"/>
        <EditableDiv className="location" placeholder="LOCATION"/>
        <EditableDiv className="time" contentEditable={true} onKeyPress={(ev) => {
            if(ev.which === 13) {
                addAction();
            }
        }} placeholder="TIME ex: MORNING, NIGHT"></EditableDiv>
        
        <div><Button variant="outlined" onClick={addAction}>Add Action</Button></div>
    </div>;
}

export default SceneHeading;