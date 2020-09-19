 const CHARECTOR = "CHARECTOR";
 const ACTION = "ACTION";
 const PARANTHETICAL = "PARANTHETICAL";
 const DIALOGUE = "DIALOGUE";
 const SCENE_HEADING = "SCENE_HEADING"
 const TRANSITION = "TRANSITION"
 const LOGLINE = "LOGLINE";
 export const elementTypeMap = {
    SCENE_HEADING: 'sceneHeading',
   ACTION: 'action',
 }
 export const elementSubTypeMap = {
    INT: 'int_ext',
    TIME: 'time',
    LOCATION: 'location',
    SUMMARY: 'summary',
 }
 export default {
    CHARECTOR,
    ACTION,
    PARANTHETICAL,
    DIALOGUE,
    SCENE_HEADING,
    TRANSITION,
    LOGLINE,
 }