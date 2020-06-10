import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Paranthetical({onKeyPress}) {

    return (<div className="paranthetical">
        <EditableDiv placeholder="describe state of charector" onKeyPress={onKeyPress}/>
    </div>)
}
export default Paranthetical;