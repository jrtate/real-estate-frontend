import React, { useState, useEffect } from 'react';
import './Home.css';
import NavList from '../components/NavList/NavList.component';
import ToggleButton from '../components/ToggleButton/ToggleButton.component';
import NavItemsList from './Home.constants';
import EmailIcon from '../assets/EmailIcon.svg';
import Deposits from '../Deposits/Deposits.component';

const Home = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
      setNavItems(NavItemsList);
  }, [])

  return (
    <div className={'homeContainer'}>

        {/* NAVIGATION SECTION */}
        <div className={'navListSection'}>

            {/* TOP LEFT HEADER */}
            <div className={'displayAvatarContainer'}>

                {/* DISPLAY AVATAR IMAGE */}
                {/* TODO: HYDRATE FROM API */}
                <div className={'displayAvatar'}>
                    <div className={'avatarPlaceholder'}>?</div>
                </div>
                
                {/* AGENT NAME */}
                {/* TODO: HYDRATE FROM API */}
                <div className={'agentName'}>Justin Tate</div>
            </div>

            {/* NAVIGATION */}
            <NavList menuOptions={navItems}/>

            {/* THEME TOGGLE */}
            <div className={'themeToggle'}>
                <ToggleButton onClick={() => {}}/>
            </div>
        </div>


        {/* BODY SECTION */}
        <div className={'bodySectionContainer'}>

            {/* TOP TOOLBAR */}
            <div className={'toolbar'}>

                {/* NOTIFICATIONS */}
                <img src={EmailIcon} alt={'Notifications'} />

                {/* MENU AVATAR */}
                <div className={'menuAvatar'}>
                    <div className={'avatarPlaceholder'}>?</div>
                </div>

            </div>


            {/* BODY CONTENT */}
            <div className={'bodyContainer'}>
                <Deposits />
            </div>

        </div>

    </div>
  );
};

export default Home;
