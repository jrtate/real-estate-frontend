import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
    <div
        className={'button'}
        onClick={() => {
            props.onClick();
        }}
    >
        {props.label}
    </div>
);

Button.propTypes = {
    label: PropTypes.string,

    // Functions
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    label: 'Click Me',
    onClick: () => {},
};

export default Button;