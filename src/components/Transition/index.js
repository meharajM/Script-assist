import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Transition(props) {
    return <div className="transition">
        {/* <Select
          id="transition-select"
          {...props}
          ref={props.elementRef}
        >
          <MenuItem value={'FADEIN'}>FADE IN</MenuItem>
          <MenuItem value={'FADEOUT'}>FADE OUT</MenuItem>
          <MenuItem value={"CUTTO"}>CUT TO</MenuItem>
        </Select> */}
        <EditableDiv className="transition" contentEditable={true} placeholder="FADEIN/FADEOUT/CUTTO" {...props} value={props.content[props.id]}></EditableDiv>

    </div>
}
export default Transition