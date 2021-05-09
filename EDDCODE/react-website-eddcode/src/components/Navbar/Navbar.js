import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBn,
  NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
             <NavbarContainer>
               <NavLogo to="/">
                 <NavIcon />
                  EDDCODE
               </NavLogo>
               <MobileIcon onClick={handleClick}>
                 {click ? <FaTimes /> : <FaBars /> } 
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                 <NavItem>
                   <NavLinks to='/'>Home</NavLinks>  
                 </NavItem>                                  
                 <NavItem>
                   <NavLinks to='/services'>Servicios</NavLinks>  
                 </NavItem>                               
                 <NavItem>
                   <NavLinks to='/products'>Productos</NavLinks>  
                 </NavItem>
                 <NavItemBn>
                   {button ? (
                     <NavBtnLink to='/sing-up'>
                       <Button primary>Inicia Sesion</Button> 
                     </NavBtnLink>
                   ) : (
                     <NavBtnLink to='/sing-up'>
                       <Button fontBig primary>
                         Inicia Sesion
                       </Button>
                     </NavBtnLink>
                   )}
                 </NavItemBn>   
               </NavMenu>
             </NavbarContainer>  
          </Nav>
        </IconContext.Provider>  
        </>
    );
  };
export default Navbar;
