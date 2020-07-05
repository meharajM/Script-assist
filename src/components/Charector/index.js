import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function Charector(props) {

    return <div className="charector">
        <EditableDiv placeholder="Character name" {...props} value={props.content[props.id]}/>

        </div>
}

export default Charector;