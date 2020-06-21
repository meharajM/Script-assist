import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Dialogue(props) {

    return (<div className="dialogue">
        <div className="dialogue-container">
            <EditableDiv placeholder="Dialogue" {...props}/>
        </div>
    </div>)
}
export default Dialogue;