import HomeIcon from '../assets/HomeIcon.svg';
import DepositsIcon from '../assets/DepositsIcon.svg';
import OffersIcon from '../assets/OffersIcon.svg';
import PaymentsIcon from '../assets/PaymentsIcon.svg';
import SettingsIcon from '../assets/SettingsIcon.svg';

export const NavItems = [
    {
      id: 1,
      label: 'Home',
      image: <img src={HomeIcon} alt={'HomeIcon'} />,
      isSelected: false,
      onClick: () => {}
    },
    {
      id: 2,
      label: 'Deposits',
      image: <img src={DepositsIcon} alt={'DepositsIcon'} />,
      isSelected: true,
      onClick: () => {}
    },
    {
      id: 3,
      label: 'Offers',
      image: <img src={OffersIcon} alt={'OffersIcon'} />,
      isSelected: false,
      onClick: () => {}
    },
    {
      id: 4,
      label: 'Payments',
      image: <img src={PaymentsIcon} alt={'PaymentsIcon'} />,
      isSelected: false,
      onClick: () => {}
    },
    {
      id: 5,
      label: 'Settings',
      image: <img src={SettingsIcon} alt={'SettingsIcon'} />,
      isSelected: false,
      onClick: () => {}
    },
  ];

  export default NavItems;
