import React from 'react';
import EditableDiv from '../EditableDiv';
import { Button } from '@material-ui/core';
import './style.scss';
function Action(props) {
    const {insChar} = props;
    return (<div className="action">
        <EditableDiv placeholder="Action"/>
        <Button variant="contained" onClick={insChar}>Insert Charector</Button>
    </div>)
}

export default Action;