import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function Charector({onKeyPress}) {

    return <div className="charector">
        <EditableDiv placeholder="Charector name" onKeyPress={onKeyPress}/>

        </div>
}

export default Charector;