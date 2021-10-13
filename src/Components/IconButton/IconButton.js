import React from 'react';
import s from './IconButton.module.css';
import PropTypes from 'prop-types';

const IconButton = ({ children, onModal, ...allyProps }) => {
    return (
        <button
            type="button"
            onClick={onModal}
            className={s.IconButton}
            {...allyProps}
        >
            {children}
        </button>
    );
};

IconButton.defaultProps = {
    onModal: () => null,
    children: null,
};

IconButton.propTypes = {
    onModal: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
