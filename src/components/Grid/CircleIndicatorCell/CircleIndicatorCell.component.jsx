import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './CircleIndicatorCell.css';

const CircleIndicatorCell = (props) => (
    <div
        className={classNames(
            'indicatorCircle',
            { 'greenFill': props.status === 1 }, 
            { 'yellowFill': props.status === 2 },
            { 'redFill': props.status === 3 }
        )}
    />
);

CircleIndicatorCell.propTypes = {
    status: PropTypes.number.isRequired,
};

CircleIndicatorCell.defaultProps = {
    status: 1,
}

export default CircleIndicatorCell;
