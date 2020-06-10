import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Action({onKeyPress}) {
    return (<div className="action">
        <EditableDiv placeholder="Action" onKeyPress={onKeyPress}/>
    </div>)
}

export default Action;