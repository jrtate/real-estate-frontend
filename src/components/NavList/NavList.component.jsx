import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem/NavItem.component';
import './NavList.css';

const NavList = (props) => {
    return (
        <div className={'navListContainer'}>
            {props.menuOptions.map(item => (
                <NavItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    onClick={props.onClick}
                    isSelected={item.isSelected}
                    image={item.image}
                />
            ))}
        </div>
    );
};

const menuOptionShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,

    onClick: PropTypes.func.isRequired,
});

NavList.propTypes = {
    menuOptions: PropTypes.arrayOf(menuOptionShape).isRequired,
};

NavList.defaultProps = {
    menuOptions: [
        {
            id: 1,
            label: 'Example Menu Item 1',
            image: {},
            isSelected: true,
            onClick: () => {},
        },
        {
            id: 2,
            label: 'Example Menu Item 2',
            image: {},
            isSelected: false,
            onClick: () => {},
        },
        {
            id: 3,
            label: 'Example Menu Item 3',
            image: {},
            isSelected: false,
            onClick: () => {},
        },
    ],
};

export default NavList;