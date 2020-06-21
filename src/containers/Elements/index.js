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
function Element(props) {
    const {type, removeElement, id} = props;
    const [show, setShow] = useState(false);
    let Element = null; 
    const onKeyDown = (e) => {
        const content = e.currentTarget.innerText.trim();
        const [currentElement, eleId, type] = e.currentTarget.id.split('-');
        const isEnter = e.key === 'Enter';
        const isBackSpace = e.key === 'Backspace';
        if(isEnter && e.shiftKey) {
            setShow((prevState) => !prevState)
            e.preventDefault();
        } else if(isBackSpace && !content.length) {
            if(currentElement !== 'sceneHeading' || (currentElement === 'sceneHeading' && type === 'int_ext')) {
                removeElement(id)
                e.preventDefault();
            }  
        } else if(isEnter && (currentElement === 'character' || currentElement === "paranthetical" || currentElement === "sceneHeading")) {
            e.preventDefault();
        }
    }   
    const elementProps = {onKeyDown}
    switch(type) {
        case constants.SCENE_HEADING:
            Element = SceneHeading;
            break;
        case constants.ACTION: 
            Element = Action;
            break;
        case constants.CHARECTOR:
            Element = Charector;
            break;
        case constants.PARANTHETICAL:
            Element = Paranthetical;
            break;
        case constants.DIALOGUE:
            Element = Dialogue;
            break;
        case constants.TRANSITION:
            Element = Transition;
        default: 

    }
    return <div className="element">
        <Element {...elementProps} {...props}/>
        <ElementOptions show={show} {...props} handleClose={() => { setShow(false)}}/>
    </div>
    
}
Element.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Element;