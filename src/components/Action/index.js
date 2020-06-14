import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Action(props) {
    return (<div className="action">
        <EditableDiv placeholder="Action" {...props}/>
    </div>)
}

export default Action;