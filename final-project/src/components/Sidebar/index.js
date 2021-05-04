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

const Sidebar = ({ isOpen, toggle, check, setCheck }) => {
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
        <SidebarRoute to='/' onClick = {() => setCheck(!check)}>View Cart and Checkout</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
