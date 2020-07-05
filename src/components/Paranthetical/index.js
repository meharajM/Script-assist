import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Paranthetical(props) {

    return (<div className="paranthetical">
        <EditableDiv placeholder="describe state of charector" {...props} value={props.content[props.id]}/>
    </div>)
}
export default Paranthetical;