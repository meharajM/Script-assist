import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
function ElementOptions(props){
    const {show, handleClose, addSceneHeading, addAction, insChar, addDialogue, addParanthetical, addTransition} = props;
    const onSelect = (selectedCallBack) => {
      selectedCallBack();
      handleClose();
    }
    return <Menu
    id="elements-menu"
    open={show}
    onClose={handleClose}
  >
    <MenuItem onClick={() => onSelect(addSceneHeading)} >Scene heading</MenuItem>
    <MenuItem onClick={() => onSelect(addAction)}>Action</MenuItem>
    <MenuItem onClick={() => onSelect(insChar)} >Character</MenuItem>
    <MenuItem onClick={() => onSelect(addParanthetical)} >Paranthetical</MenuItem>
    <MenuItem onClick={() => onSelect(addDialogue)} >Dialogue</MenuItem>
    <MenuItem onClick={() => onSelect(addTransition)} >Transition</MenuItem>
  </Menu>
}
export default ElementOptions;