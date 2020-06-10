import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Dialogue({onKeyPress}) {

    return (<div className="dialogue">
        <EditableDiv placeholder="Dialogue" onKeyPress={onKeyPress}/>
    </div>)
}
export default Dialogue;