import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
function Editor(props) {
        const { onChange, onKeyPress, editorRef} = props;
return <div className="page" contentEditable onInput={onChange} onKeyPress={onKeyPress} ref={editorRef}>abcdskjfd</div>
}
Editor.propTypes = {
        editorRef: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onKeyPress: PropTypes.func,
}
export default Editor;