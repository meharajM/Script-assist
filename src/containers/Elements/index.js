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
import {shouldShowOptions} from '../../utils/appUtils';
function getAddElementAction(key, isShift, props) {
    return false; // disabling short cuts
    // const { addAction, addTransition,addDialogue, addParanthetical, insChar, addSceneHeading} = props;
    // const action = isShift && key.toLowerCase();
    // let addElementAction;
    // switch(action) {
    //     case 's':
    //         addElementAction = addSceneHeading;
    //         break;
    //     case 'a':
    //         addElementAction = addAction;
    //         break;
    //     case 't':
    //         addElementAction = addTransition;
    //         break;
    //     case 'd':
    //         addElementAction = addDialogue;
    //         break;
    //     case 'p':
    //         addElementAction = addParanthetical;
    //         break;
    //     case 'c':
    //         addElementAction = insChar;
    //         break;
    //     default: 
    //         addElementAction = null;
    // }
    // return addElementAction;
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
    toggleSetShow = () => {
        this.setShow(!this.state.show)
    }
    onKeyDown = (e) => {
        const {removeElement, id, onContentChange} = this.props;
        let content = e.currentTarget.innerText;
        console.log("inside set keydown before", e.currentTarget.innerHTML);

        const fullId = e.currentTarget.id;
        const [board, boardId, currentElement, eleId, type] = fullId.split('-');
        const isEnter = e.key === 'Enter';
        const isBackSpace = e.key === 'Backspace';
        const addElementAction = getAddElementAction(e.key, e.shiftKey, this.props);
        if(addElementAction) {
            addElementAction();
            e.preventDefault();
        } else if(shouldShowOptions(e)) {
            this.toggleSetShow();
            e.preventDefault();
        } else if(isBackSpace && !content.length) {
            if(currentElement !== 'sceneHeading' || (currentElement === 'sceneHeading' && type === 'int_ext')) {
                removeElement(id)
                e.preventDefault();
            }  
        } else if(isEnter && (currentElement === 'character' || currentElement === "paranthetical" || currentElement === "sceneHeading")) {
            e.preventDefault();
        } else {
                const key = e.key.toLowerCase();
                console.log(e.keyCode);
                if(currentElement === 'sceneHeading'){
                    const inp = String.fromCharCode(e.keyCode);
                    const isCharKey = /[a-zA-Z0-9-_ ]/.test(inp);
                    if(type === 'int_ext') {
                        if(key === 'backspace') {
                            content = "";
                            e.preventDefault();
                        } else if((content === 'INT' || content === 'EXT') && isCharKey) {
                            e.preventDefault();
                        } else if(key === 'i') {
                            content = 'INT';
                            e.preventDefault();
                        }else if(key === 'e'){
                            content = 'EXT';
                            e.preventDefault();
                        }
                    } else if(type === 'time') {
                        if(key === 'backspace') {
                            content = "";
                            e.preventDefault();
                        } else if((content === 'DAY' || content === 'NIGHT') && isCharKey) {
                            e.preventDefault();
                        } else if(key === 'd') {
                            content = 'DAY';
                            e.preventDefault();
                        }else if(key === 'n'){
                            content = 'NIGHT'
                            e.preventDefault();
                        }
                    } else if(type === "location") {
                        // onContentChange(location_id, ev.currentTarget.innerText.trim());

                    }
                } else if(currentElement === 'transition') {
                    if(key === 'c') {
                        content = 'CUT TO';
                    } else if(content === 'fi') {
                        content = 'FADE IN'
                    } else if(content === 'fo') {
                        content = 'FADE OUT';
                    }
                } 
                
            console.log("inside set keydown", content);
            onContentChange(fullId, content)
        }
    }   

    render() {
        const {type, id} = this.props;
        const {show} = this.state;
        const elementProps = {onKeyDown: this.onKeyDown, onContentChange: this.onContentChange, toggleElementOptions: this.toggleSetShow}
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