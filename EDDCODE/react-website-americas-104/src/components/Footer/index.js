import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };
  
    return (
        <FooterContainer>
         <FooterWrap>
          <FooterLinksContainer>
           <FooterLinkWrapper>
             <FooterLinkItems>
               <FooterLinkTitle>Nosotros</FooterLinkTitle>
                 <FooterLink to='/'>Donde estamos</FooterLink> 
                 <FooterLink to='/'>¿Quienes somos?</FooterLink>
                 <FooterLink to='/'>Contacto</FooterLink>               
             </FooterLinkItems>
             <FooterLinkItems>
               <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                 <FooterLink to='/'>Facebook</FooterLink> 
                 <FooterLink to='/'>Instagram</FooterLink> 
                 <FooterLink to='/'>Twitter</FooterLink>              
             </FooterLinkItems>
           </FooterLinkWrapper>    
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                 Americas-104
              </SocialLogo>
              <WebsiteRights>Americas-104 © {new Date().getFullYear()} 
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='//www.facebook.com/americas104' target='_blank'
                arial-label='Facebook'>
                 <FaFacebook />   
                </SocialIconLink>
                <SocialIconLink href='https://www.instagram.com/americas_104/' target='_blank'
                arial-label='Instagram'>
                 <FaInstagram />   
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank'
                arial-label='Twitter'>
                 <FaTwitter />   
                </SocialIconLink>
              </SocialIcons>  
            </SocialMediaWrap>
          </SocialMedia>    
         </FooterWrap>   
        </FooterContainer>
    )
}

export default Footer
