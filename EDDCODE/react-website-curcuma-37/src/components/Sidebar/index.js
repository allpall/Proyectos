import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to='nosotros' onClick={toggle}>Nosotros</SidebarLink>
              <SidebarLink to='cake' onClick={toggle}>Cakes</SidebarLink>
              <SidebarLink to='drink' onClick={toggle}>Drinks</SidebarLink>  
            </SidebarMenu>
          </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar
