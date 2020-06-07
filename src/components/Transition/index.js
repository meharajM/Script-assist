import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './style.scss';
function Transition(props) {
    return <div className="transition">
        <Select
          id="transition-select"
        >
          <MenuItem value={'FADEIN'}>FADE IN</MenuItem>
          <MenuItem value={'FADEOUT'}>FADE OUT</MenuItem>
          <MenuItem value={"CUTTO"}>CUT TO</MenuItem>
        </Select>
    </div>
}
export default Transition