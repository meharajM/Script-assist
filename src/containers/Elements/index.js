import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';
import {CHAR} from '../../constants';
const elements = ["Scene Heading",
    "Action",
    CHAR,
    "Dialogue",
    "Parenthetical",
    "Extensions",
    "Transition",
    "Shot"]
function Elements(props) {
    const {onAddElement} = props;
    return <div className="elements">
{elements.map(el => <button onClick={() => {onAddElement(el)}}>{el}</button>)}
    </div>
}
Elements.propTypes = {
    onAddElement: PropTypes.func.isRequired,
}
export default Elements;