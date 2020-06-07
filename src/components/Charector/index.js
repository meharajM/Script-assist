import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
import { Button } from '@material-ui/core';
function Charector(props) {
    const {addParanthetical, addDialogue} = props;
    return <div className="charector">
        <EditableDiv placeholder="Charector name"/>
        <Button variant="outlined" onClick={addParanthetical}>Paranthetical</Button>
        <Button variant="outlined" onClick={addDialogue}>Dialog</Button>
        </div>
}

export default Charector;