import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
    return (
        <div className="singleNote">
            {props.content}
        </div>
    )
}

Note.propTypes = {
    content: PropTypes.string
}

export default Note;