import React from 'react';
import EditableDiv from '../EditableDiv';
import './style.scss';
function Action(props) {
    const {content, ...rest} = props;
    return (<div className="action">
        <EditableDiv placeholder="Action" value={content[props.id]} {...rest}/>
    </div>)
}

export default Action;