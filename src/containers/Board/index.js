import React, {useState, useEffect, useRef} from 'react';
import Elements from '../Elements'
import './style.scss';
import constants from '../../constants';
function Board(props) {
    const {elements, content, setElementCount, elementsCount} = props;
    const [elementsList, setElemetsList] = useState(elements || [{type: constants.SCENE_HEADING, sceneNumber: elementsCount.sceneHeading, id: `sceneHeading-${elementsCount.sceneHeading}`}]);
    const [currentElement, setCurrentElement] = useState(`sceneHeading-${elementsCount.sceneHeading}`)
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
        setElemetsList(prevElList => [...prevElList, newEle] )
        setCurrentElement(newEle.id)
    }
    const setFocusedElement = element => {
        currentElementRef = element;
    }
    const addParanthetical = function () {
        setElemetsListToState({type: constants.PARANTHETICAL, id: `paranthetical-${elementsCount.parantheticals}`})
        setElementCount({parantheticals: elementsCount.parantheticals + 1});
        
    }
    const addTransition = () => {
        setElemetsListToState({type: constants.TRANSITION, id: `transition-${elementsCount.transition}`})
        setElementCount({ transition: elementsCount.transition + 1});
    
    }
    const addDialogue = () => {
        setElemetsListToState({type: constants.DIALOGUE, id: `dialogue-${elementsCount.dialogue}`})
        setElementCount({dialogue: elementsCount.dialogue + 1});
    
    }
    const insertChar = function() {
        setElemetsListToState({type: constants.CHARECTOR, id: `character-${elementsCount.charector}`})
        setElementCount({ charector: elementsCount.charector + 1});

    }
    const addAction = function() {
        setElemetsListToState({type: constants.ACTION, id: `action-${elementsCount.action}`})
        setElementCount({ action: elementsCount.action + 1});
    }
    const addSceneHeading = () => {
        setElemetsListToState({type: constants.SCENE_HEADING, id: `sceneHeading-${elementsCount.sceneHeading}`, sceneNumber: elementsCount.sceneHeading})
        setElementCount({ sceneHeading: elementsCount.sceneHeading + 1});
    }
    const removeElement = (eleId) => {
        if(elementsList.length > 1 && eleId){
            const newElementsList = elementsList.filter(el => el.id !== eleId);
            setElemetsList(prevElList => eleId ? newElementsList : prevElList);
            setCurrentElement(newElementsList[newElementsList.length - 1].id)
        }

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
        {elementsList.map(el => <Elements key={el.id} {...el} {...commonProps} elementRef={el.id === currentElement ? setFocusedElement : null}/>)}
    </div>
}

export default Board;