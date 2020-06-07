import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import SceneHeading from '../../components/SceneHeading';
import Action from '../../components/Action';
import Charector from '../../components/Charector';
import constants from '../../constants';
import Paranthetical from '../../components/Paranthetical';
import Dialogue from '../../components/Dialogue';
function Elements(props) {
    const {type, addAction, insChar, addParanthetical, addDialogue} = props;
    let element = null; 
    switch(type) {
        case constants.SCENE_HEADING:
            element = (<SceneHeading addAction={addAction}/>);
            break;
        case constants.ACTION: 
            element = (<Action insChar={insChar}/>);
            break;
        case constants.CHARECTOR:
            element = (<Charector addParanthetical={addParanthetical} addDialogue={addDialogue} />);
            break;
        case constants.PARANTHETICAL:
            element = (<Paranthetical/>);
            break;
        case constants.DIALOGUE:
            element = (<Dialogue/>);
            break;
        default: 

    }
    return <div className="element">
        {element}
    </div>
    
}
Elements.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Elements;