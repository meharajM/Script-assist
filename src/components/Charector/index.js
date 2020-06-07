import React from 'react';
import EditableDiv from '../EditableDiv'
import './style.scss';
import { Button } from '@material-ui/core';
function Charector(props) {
    const {addParanthetical, addDialogue} = props;
    return <div className="charector">
        <EditableDiv placeholder="Charector name"/>
        <Button variant="contained" onClick={addParanthetical}>Paranthetical</Button>
        <Button variant="contained" onClick={addDialogue}>Dialog</Button>
        </div>
}

export default Charector;