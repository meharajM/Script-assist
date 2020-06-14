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
    let element = null; 
    const onKeyDown = (e) => {
        const content = e.currentTarget.innerText.trim();
        if(e.key === 'Enter' && e.shiftKey) {
            setShow((prevState) => !prevState)
            e.preventDefault();
        } else if(e.key === 'Backspace' && !content.length) {
            removeElement(id)
            e.preventDefault();
        }
    }   
    switch(type) {
        case constants.SCENE_HEADING:
            element = (<SceneHeading onKeyDown={onKeyDown}/>);
            break;
        case constants.ACTION: 
            element = (<Action onKeyDown={onKeyDown}/>);
            break;
        case constants.CHARECTOR:
            element = (<Charector onKeyDown={onKeyDown}/>);
            break;
        case constants.PARANTHETICAL:
            element = (<Paranthetical onKeyDown={onKeyDown}/>);
            break;
        case constants.DIALOGUE:
            element = (<Dialogue onKeyDown={onKeyDown}/>);
            break;
        case constants.TRANSITION:
            element = (<Transition onKeyDown={onKeyDown}/>)
        default: 

    }
    return <div className="element">
        {element}
        <ElementOptions show={show} {...props} handleClose={() => { setShow(false)}}/>
    </div>
    
}
Element.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Element;