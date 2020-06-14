import React, {useState} from 'react';
import Element from '../Elements'
import './style.scss';
import constants from '../../constants';
function Board(props) {
    const {elements} = props;
    const elementsCount = {
        sceneHeading: 1,
        action: 0,
        charector: 0,
        dialogue: 0,
        paranthetical: 0,
        transition: 0,
    }
    const [elementsList, setElemetsList] = useState(elements || [{type: constants.SCENE_HEADING, sceneNumber: elementsCount.sceneHeading}]);

    const setElemetsListToState = (newEle) => {
        setElemetsList(prevElList => [...prevElList, newEle] )
    }
    const addParanthetical = function () {
        elementsCount.parantheticals += 1;
        setElemetsListToState({type: constants.PARANTHETICAL, id: `paranthetical-${elementsCount.parantheticals}`})
    }
    const addTransition = () => {
        elementsCount.transition += 1;
        setElemetsListToState({type: constants.TRANSITION, id: `transition-${elementsCount.transition}`})
    }
    const addDialogue = () => {
        elementsCount.dialogue += 1;
        setElemetsListToState({type: constants.DIALOGUE, id: `dialogue-${elementsCount.dialogue}`})
    }
    const insertChar = function() {
        elementsCount.charector += 1;
        setElemetsListToState({type: constants.CHARECTOR, id: `charector-${elementsCount.charector}`})
    }
    const addAction = function() {
        elementsCount.action += 1;
        setElemetsListToState({type: constants.ACTION, id: `action-${elementsCount.action}`})
    }
    const addSceneHeading = () => {
        elementsCount.sceneHeading += 1;
        setElemetsListToState({type: constants.SCENE_HEADING, id: `sceneHeading-${elementsCount.sceneHeading}`, sceneNumber: elementsCount.sceneHeading})
    }
    const removeElement = (eleId) => {
        setElemetsList(prevElList => eleId ? prevElList.filter(el => el.id !== eleId) : prevElList)
    }
    const commonProps = {removeElement, addAction, addTransition,addDialogue, addParanthetical, insChar: insertChar, addSceneHeading}
    

    return <div className="board">
        {elementsList.map(el => <Element {...el} {...commonProps}/>)}
    </div>
}

export default Board;