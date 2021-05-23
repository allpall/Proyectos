import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
      if(window.scrollY >= 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
           <NavLogo to='/' onClick={toggleHome} duration={2000}
           spy={true}>Curcuma37</NavLogo>
           <MobileIcon onClick={toggle}>
             <FaBars />    
           </MobileIcon>
           <NavMenu>
             <NavItem>
               <NavLinks to='nosotros'
               smooth={true} duration={1000} spy={true}
               exact='true' offset={-80}
               >Nosotros</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='cake'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >Cakes</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='drink'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-78}
               >Drinks</NavLinks>    
             </NavItem>   
           </NavMenu>    
          </NavContainer>  
        </Nav>
      </IconContext.Provider>  
      </>
    )
}

export default Navbar
