import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import {CHAR} from '../../constants';
import SceneHeading from '../../components/SceneHeading';
const elements = ["Scene Heading",
    "Action",
    CHAR,
    "Dialogue",
    "Parenthetical",
    "Extensions",
    "Transition",
    "Shot"]
function Elements(props) {
    const {type, addAction} = props;
    switch(type) {
        case 'SCENE_HEADING':
            return (<SceneHeading addAction={addAction}/>);
        case 'ACTION': 
            console.log('adding action');
            break;
        default: 

    }
    
}
Elements.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Elements;