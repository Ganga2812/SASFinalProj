import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink smooth to='#SUV'>SUVS</SidebarLink>
        <SidebarLink smooth to='#Compact'>Compact</SidebarLink>
        <SidebarLink smooth to='#Midsize'>Midsize</SidebarLink>
        <SidebarLink smooth to='#Luxury'>Luxury</SidebarLink>
        <SidebarLink smooth to='#Parking'>Parking</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>View Cart and Checkout</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
