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
function getAddElementAction(key, isShift, props) {
    const { addAction, addTransition,addDialogue, addParanthetical, insChar, addSceneHeading} = props;
    const action = isShift && key.toLowerCase();
    let addElementAction;
    switch(action) {
        case 's':
            addElementAction = addSceneHeading;
            break;
        case 'a':
            addElementAction = addAction;
            break;
        case 't':
            addElementAction = addTransition;
            break;
        case 'd':
            addElementAction = addDialogue;
            break;
        case 'p':
            addElementAction = addParanthetical;
            break;
        case 'c':
            addElementAction = insChar;
            break;
        default: 
            addElementAction = null;
    }
    return addElementAction;
}
class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    setShow = (show) => {
        this.setState({show});
    }
    onKeyDown = (e) => {
        const {removeElement, id, onContentChange} = this.props;
        const content = e.currentTarget.innerText;
        const [currentElement, eleId, type] = e.currentTarget.id.split('-');
        const isEnter = e.key === 'Enter';
        const isBackSpace = e.key === 'Backspace';
        const addElementAction = getAddElementAction(e.key, e.shiftKey, this.props);
        if(addElementAction) {
            addElementAction();
            e.preventDefault();
        } else if(isEnter && e.shiftKey) {
            this.setShow(!this.state.show)
            e.preventDefault();
        } else if(isBackSpace && !content.length) {
            if(currentElement !== 'sceneHeading' || (currentElement === 'sceneHeading' && type === 'int_ext')) {
                removeElement(id)
                e.preventDefault();
            }  
        } else if(isEnter && (currentElement === 'character' || currentElement === "paranthetical" || currentElement === "sceneHeading")) {
            e.preventDefault();
        } else {
            onContentChange(e.currentTarget.id, content)
        }
    }   

    render() {
        const {type, id} = this.props;
        const {show} = this.state;
        const elementProps = {onKeyDown: this.onKeyDown}
        let Element = null; 

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
            <Element key={id} {...elementProps} {...this.props}/>
            <ElementOptions show={show} {...this.props} handleClose={() => { this.setShow(false)}}/>
        </div>
    }
}
Element.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Element;