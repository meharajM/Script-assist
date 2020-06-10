import React, {useState} from 'react';
import Element from '../Elements'
import './style.scss';
import constants from '../../constants';
function Board(props) {
    const {elements} = props;
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
        setElemetsListToState({type: constants.DIALOGUE, })
    }
    const insertChar = function() {
        setElemetsListToState({type: constants.CHARECTOR, })
    }
    const addAction = function() {
        setElemetsListToState({type: constants.ACTION, })
    }
    const addSceneHeading = () => {
        setElemetsListToState({type: constants.SCENE_HEADING, })
    }
    const commonProps = {addTransition,addDialogue, addParanthetical, insChar: insertChar, addSceneHeading}
    
    const [elementsList, setElemetsList] = useState(elements || [{type: constants.SCENE_HEADING}]);

    return <div className="board">
        {elementsList.map(el => <Element {...el} {...commonProps}/>)}
    </div>
}

export default Board;