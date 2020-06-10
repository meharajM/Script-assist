import React, {useState} from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import SceneHeading from '../../components/SceneHeading';
import Action from '../../components/Action';
import Charector from '../../components/Charector';
import constants from '../../constants';
import Paranthetical from '../../components/Paranthetical';
import Dialogue from '../../components/Dialogue';
import Transition from '../../components/Transition';
import ElementOptions from '../../components/ElementOptions';
function Elements(props) {
    const {type} = props;
    const [show, setShow] = useState(false);
    let element = null; 
    const onKeyPress = (e) => {
        if(e.key === 'Enter' && e.shiftKey) {
            setShow((prevState) => !prevState)
            e.preventDefault();
        }
    }   
    switch(type) {
        case constants.SCENE_HEADING:
            element = (<SceneHeading onKeyPress={onKeyPress}/>);
            break;
        case constants.ACTION: 
            element = (<Action onKeyPress={onKeyPress}/>);
            break;
        case constants.CHARECTOR:
            element = (<Charector onKeyPress={onKeyPress}/>);
            break;
        case constants.PARANTHETICAL:
            element = (<Paranthetical onKeyPress={onKeyPress}/>);
            break;
        case constants.DIALOGUE:
            element = (<Dialogue onKeyPress={onKeyPress}/>);
            break;
        case constants.TRANSITION:
            element = (<Transition onKeyPress={onKeyPress}/>)
        default: 

    }
    return <div className="element">
        {element}
        <ElementOptions show={show} {...props} handleClose={() => { setShow(false)}}/>
    </div>
    
}
Elements.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Elements;