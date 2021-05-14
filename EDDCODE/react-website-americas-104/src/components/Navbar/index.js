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
           spy={true}>Americas-104</NavLogo>
           <MobileIcon onClick={toggle}>
             <FaBars />    
           </MobileIcon>
           <NavMenu>
             <NavItem>
               <NavLinks to='cafe'
               smooth={true} duration={1000} spy={true}
               exact='true' offset={-80}
               >Tierra Latente</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='kowi'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >KOWI</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='raku'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >Raku</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='konkon'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >KONKON</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='phi'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >Phi</NavLinks>    
             </NavItem>
             <NavItem>
               <NavLinks to='life'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >Therapy life</NavLinks>    
             </NavItem> 
             <NavItem>
               <NavLinks to='teko'
                smooth={true} duration={1000} spy={true}
                exact='true' offset={-80}
               >Tekochoa</NavLinks>    
             </NavItem>   
           </NavMenu>    
          </NavContainer>  
        </Nav>
      </IconContext.Provider>  
      </>
    )
}

export default Navbar
