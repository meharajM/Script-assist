import constants from '../../constants';
export default {
    paranthetical: (elementsCount) => ({type: constants.PARANTHETICAL, id: `paranthetical-${elementsCount.parantheticals}`}),
    transition: (elementsCount) => ({type: constants.TRANSITION, id: `transition-${elementsCount.transition}`}),
    dialogue: (elementsCount) => ({type: constants.DIALOGUE, id: `dialogue-${elementsCount.dialogue}`}),
    charecter: (elementsCount) => ({type: constants.CHARECTOR, id: `character-${elementsCount.charector}`}),
    action: (elementsCount) => ({type: constants.ACTION, id: `action-${elementsCount.action}`}),
}