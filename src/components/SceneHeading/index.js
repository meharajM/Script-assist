import React, {useState} from 'react';
import { AutoComplete, Input } from 'antd';
import EditableDiv from '../EditableDiv'
import {getContexts} from '../../contexts';

import './style.scss';
class SceneHeading extends React.Component{
    constructor(props) {
        super(props);
        const {id} = props;
        this.int_id = `${id}-int_ext`;
        this.location_id = `${id}-location`;
        this.time_id = `${id}-time`;
        this.summary_id = `${id}-summary`;
    }

   render() {
       const {onKeyDownHere, int_id, location_id, time_id, summary_id} = this;
       const {content, sceneNumber, elementRef, onFocus, onKeyDown, ...rest} = this.props;
    return <div>
        <div className="scene-heading-summary-header">
            <div className="scene-number">Scene summary: </div><EditableDiv elementRef={elementRef} key={summary_id} className="scene-heading-summary" id={summary_id} placeholder="  Scene description" value={content[summary_id]} onKeyDown={onKeyDown}/>
        </div>
        <div className="scene-heading">
            <EditableDiv key={int_id} className="int-ext" placeholder="INT/EXT" id={int_id} onKeyUp={onKeyDownHere} value={content[int_id]} onFocus={onFocus} onKeyDown={onKeyDown}/>
            <EditableDiv key={location_id} className="location" placeholder="LOCATION" id={location_id} onKeyUp={onKeyDownHere} value={content[location_id]} onFocus={onFocus} onKeyDown={onKeyDown}/>
            <EditableDiv key={time_id} className="time" contentEditable={true} placeholder="DAY/NIGHT" {...rest} onKeyUp={onKeyDownHere} id={time_id} value={content[time_id]} onFocus={onFocus} onKeyDown={onKeyDown}></EditableDiv>
        </div>
        
    </div>;
   }
   
}

export default SceneHeading;