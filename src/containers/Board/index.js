import React, {useState} from 'react';
import Element from '../Elements'
import './style.scss';
function Board(props) {
    const {elements} = props
    const addAction = function() {
        debugger
        setElemetsList(prevElList => [...prevElList, {type: 'ACTION'}] )
    }
    const [elementsList, setElemetsList] = useState(elements || [{type: "SCENE_HEADING", addAction: addAction}]);

    return <div className="board">
        {elementsList.map(el => <Element {...el}/>)}
    </div>
}

export default Board;