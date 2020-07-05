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
    }

    onKeyDownHere = (ev) => {
        const {int_id, time_id, location_id} = this;
        const {onContentChange} = this.props;
        let content = ev.key.toLowerCase();
        const fullId = ev.currentTarget.id;
        const [currentElement, eleId, type] = ev.currentTarget.id.split('-');
        if(currentElement === 'sceneHeading' && type === 'int_ext') {
            if(content === 'i') {
                content = 'INT';
                onContentChange(int_id, content);
            }else if(content === 'e'){
                content = 'EXT';
                onContentChange(int_id, content);
            }
        }
        if(currentElement === 'sceneHeading' && type === 'time') {
            if(content === 'd') {
                content = 'DAY';
                onContentChange(time_id, content);
                ev.preventDefault();
            }else if(content === 'n'){
                content = 'NIGHT'
                onContentChange(time_id, content);
                ev.preventDefault();

            }
        } else if(type === "location") {
            onContentChange(location_id, ev.currentTarget.innerText.trim());

        }
        
    }


   render() {
       const {onKeyDownHere, int_id, location_id, time_id} = this;
       const {content, sceneNumber, elementRef, onFocus, onKeyDown, ...rest} = this.props;
    return <div className="scene-heading">
        <span className="scene-number">Scene {sceneNumber}: </span>
        <EditableDiv key={int_id} className="int-ext" placeholder="INT/EXT" elementRef={elementRef} id={int_id} onKeyUp={onKeyDownHere} value={content[int_id]} onFocus={onFocus} onKeyDown={onKeyDown}/>
        <EditableDiv key={location_id} className="location" placeholder="LOCATION" id={location_id} onKeyUp={onKeyDownHere} value={content[location_id]} onFocus={onFocus} onKeyDown={onKeyDown}/>
        <EditableDiv key={time_id} className="time" contentEditable={true} placeholder="DAY/NIGHT" {...rest} onKeyUp={onKeyDownHere} id={time_id} value={content[time_id]} onFocus={onFocus} onKeyDown={onKeyDown}></EditableDiv>
    
    </div>;
   }
   
}

export default SceneHeading;