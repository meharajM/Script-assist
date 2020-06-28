import React, {useState} from 'react';
import { AutoComplete, Input } from 'antd';
import EditableDiv from '../EditableDiv'
import {getContexts} from '../../contexts';

import './style.scss';
function SceneHeading(props) {
    const {elementRef, id, onKeyDown, ...rest} = props;

    const [intValue, setIntValues] = useState('');
    const [timeValue, setTimeValues] = useState('');
    const [locationValue, setLocationValues] = useState('');
    
    const onKeyUp = (ev) => {
        let content = ev.currentTarget.innerText.trim();
        const fullId = ev.currentTarget.id;
        const [currentElement, eleId, type] = ev.currentTarget.id.split('-');
        if(currentElement === 'sceneHeading' && type === 'int_ext') {
            if(content.toLowerCase() === 'i') {
                content = 'INT';
            }else if(content.toLowerCase() === 'e'){
                content = 'EXT'
            }else {
                content = ''
            }
            setIntValues(content);
        }
        if(currentElement === 'sceneHeading' && type === 'time') {
            if(content.toLowerCase() === 'd') {
                content = 'DAY';
            }else if(content.toLowerCase() === 'n'){
                content = 'NIGHT'
            }else {
                content = ''
            }
            setTimeValues(content);
        } else {
            setLocationValues(content)
        }
        
    }


    const int_id = `${id}-int_ext`;
    const location_id = `${id}-location`;
    const time_id = `${id}-time`;
    return <div className="scene-heading">
        <span className="scene-number">Scene {props.sceneNumber}: </span>
        <EditableDiv key={int_id} className="int-ext" placeholder="INT/EXT" elementRef={elementRef} id={int_id} onKeyDown={onKeyDown} onKeyUp={onKeyUp} value={intValue} />
        <EditableDiv key={location_id} className="location" placeholder="LOCATION" id={location_id} onKeyDown={onKeyDown} onKeyUp={onKeyUp}/>
        <EditableDiv key={time_id} className="time" contentEditable={true} placeholder="DAY/NIGHT" {...rest} onKeyDown={onKeyDown} onKeyUp={onKeyUp} id={time_id} value={timeValue}></EditableDiv>
        
    </div>;
}

export default SceneHeading;