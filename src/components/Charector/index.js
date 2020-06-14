import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
function Charector(props) {

    return <div className="charector">
        <EditableDiv placeholder="Charector name" {...props}/>

        </div>
}

export default Charector;