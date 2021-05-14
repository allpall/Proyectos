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
              <SidebarLink to='cafe' onClick={toggle}>Tierra Latante</SidebarLink>
              <SidebarLink to='kowi' onClick={toggle}>KOWI</SidebarLink>
              <SidebarLink to='raku' onClick={toggle}>Raku</SidebarLink>
              <SidebarLink to='konkon' onClick={toggle}>KONKON</SidebarLink>
              <SidebarLink to='phi' onClick={toggle}>Phi</SidebarLink>
              <SidebarLink to='life' onClick={toggle}>Therapy life</SidebarLink>
              <SidebarLink to='tekochoa' onClick={toggle}>Tekochoa</SidebarLink>  
            </SidebarMenu>
          </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar
