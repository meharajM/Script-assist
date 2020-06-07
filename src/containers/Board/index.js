import React, {useState} from 'react';
import Element from '../Elements'
import './style.scss';
import constants from '../../constants';
function Board(props) {
    const {elements} = props
    const setElemetsListToState = (newEle) => {
        setElemetsList(prevElList => [...prevElList, newEle] )
    }
    const addParanthetical = function () {
        setElemetsListToState({type: constants.PARANTHETICAL})
    }
    const addTransition = () => {
        setElemetsListToState({type: constants.TRANSITION})
    }
    const addDialogue = () => {
        setElemetsListToState({type: constants.DIALOGUE, addTransition})
    }
    const insertChar = function() {
        setElemetsListToState({type: constants.CHARECTOR, addDialogue, addParanthetical})
    }
    const addAction = function() {
        setElemetsListToState({type: constants.ACTION, insChar: insertChar})
    }
   
    const [elementsList, setElemetsList] = useState(elements || [{type: constants.SCENE_HEADING, addAction: addAction}]);

    return <div className="board">
        {elementsList.map(el => <Element {...el}/>)}
    </div>
}

export default Board;