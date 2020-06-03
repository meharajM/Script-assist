import React from 'react';
import './style.scss';
const elements = ["Scene Heading",
    "Action",
    "Character Name",
    "Dialogue",
    "Parenthetical",
    "Extensions",
    "Transition",
    "Shot"]
function Elements() {
    return <div className="elements">
{elements.map(el => <button>{el}</button>)}
    </div>
}
export default Elements;