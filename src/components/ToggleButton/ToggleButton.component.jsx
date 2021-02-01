import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ToggleButton.css';

const ToggleButton = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnClick = () => {
        props.onClick();
        setIsChecked(!isChecked);
    };
    return (
        <div
            className={'toggle'}
            onClick={() => {
                handleOnClick();
            }}
        >
            <div
                className={classNames(
                    'circle', {
                    'isChecked': isChecked
                })}
            />
        </div>
    );
};

ToggleButton.propTypes = {
    // Functions
    onClick: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
    onClick: () => {},
};

export default ToggleButton;