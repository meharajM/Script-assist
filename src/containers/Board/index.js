import React, {useState, useEffect, useRef} from 'react';
import Elements from '../Elements'
import './style.scss';
import constants from '../../constants';
import elementTypes from '../App/elementTypes';
function Board(props) {
    const {elements, content, setElementCount, elementsCount, addBoard, elementsList, setElemetsList, currentElement, setCurrentElement, removeElement, id} = props;
    let currentElementRef = useRef(null)
    useEffect(() => {
        if(currentElementRef && currentElementRef.focus) {
            currentElementRef.focus();
            document.execCommand('selectAll', false, null);
            // collapse selection to the end
            document.getSelection().collapseToEnd();
        }
    })

    const setElemetsListToState = (newEle) => {
        setElemetsList(newEle);
        setCurrentElement(newEle.id)
    }
    const setFocusedElement = element => {
        currentElementRef = element;
    }
    const addParanthetical = function () {
        setElemetsListToState(elementTypes.paranthetical(elementsCount, id))
        setElementCount({parantheticals: elementsCount.parantheticals + 1});
        
    }
    const addTransition = () => {
        setElemetsListToState(elementTypes.transition(elementsCount, id))
        setElementCount({ transition: elementsCount.transition + 1});
    
    }
    const addDialogue = () => {
        setElemetsListToState(elementTypes.dialogue(elementsCount, id))
        setElementCount({dialogue: elementsCount.dialogue + 1});
    
    }
    const insertChar = function() {
        setElemetsListToState(elementTypes.charecter(elementsCount, id));
        setElementCount({ charector: elementsCount.charector + 1});

    }
    const addAction = function() {
        setElemetsListToState(elementTypes.action(elementsCount, id))
        setElementCount({ action: elementsCount.action + 1});
    }
    const addSceneHeading = () => {
       // setElemetsListToState({type: constants.SCENE_HEADING, id: `sceneHeading-${elementsCount.sceneHeading}`, sceneNumber: elementsCount.sceneHeading})
        setElementCount({ sceneHeading: elementsCount.sceneHeading + 1});
        addBoard();
    }

    const onContentChange = (id, content) => {
        props.setContent(id, content);
        // setContent((prevContent) => {
        //     const newContent = {...prevContent};
        //     newContent[id] = content;
        //     return newContent;
        // });
    }
    const commonProps = {removeElement, addAction, addTransition,addDialogue, addParanthetical, insChar: insertChar, addSceneHeading, onContentChange, content, onFocus: setCurrentElement}

    return <div className="board">
        {elementsList.map(el => <Elements {...el} {...commonProps} elementRef={el.id === currentElement ? setFocusedElement : null}/>)}
    </div>
}

export default Board;