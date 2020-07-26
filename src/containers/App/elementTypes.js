import constants from '../../constants';
export default {
    paranthetical: (elementsCount, boardId) => ({type: constants.PARANTHETICAL, id: `board-${boardId}-paranthetical-${elementsCount.parantheticals}`}),
    transition: (elementsCount, boardId) => ({type: constants.TRANSITION, id: `board-${boardId}-transition-${elementsCount.transition}`}),
    dialogue: (elementsCount, boardId) => ({type: constants.DIALOGUE, id: `board-${boardId}-dialogue-${elementsCount.dialogue}`}),
    charecter: (elementsCount, boardId) => ({type: constants.CHARECTOR, id: `board-${boardId}-character-${elementsCount.charector}`}),
    action: (elementsCount, boardId) => ({type: constants.ACTION, id: `board-${boardId}-action-${elementsCount.action}`}),
}