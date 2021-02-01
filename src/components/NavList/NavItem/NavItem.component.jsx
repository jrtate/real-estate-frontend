import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <div
            className={classNames(
                'navItemContainer', {
                'isSelected': props.isSelected
            })}
        >
            {props.image}
            {props.label}
        </div>
    );
};

NavItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

NavItem.defaultProps = {
    id: 1,
    label: 'Example Label',
    image: {},
    isSelected: false,
    onClick: () => {},
};

export default NavItem;