import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Dialogue(props) {

    return (<div className="dialogue">
        <EditableDiv placeholder="Dialogue" {...props}/>
    </div>)
}
export default Dialogue;