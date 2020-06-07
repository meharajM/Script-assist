import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
import { Button } from '@material-ui/core';
function Dialogue(props) {
    const {addTransition} = props;
    return (<div className="dialogue">
        <EditableDiv placeholder="Dialogue"/>
        <Button variant='outlined' onClick={addTransition}>Add transition</Button>
    </div>)
}
export default Dialogue;