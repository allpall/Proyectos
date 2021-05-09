import React from 'react'
import { Button } from '../../globalStyles'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import {
  FooterContainer, 
  FooterSubscription, 
  FooterSubHeading, 
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIcons,
  SocialIconLink
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
          <FooterSubscription>
              <FooterSubHeading>
                Unete a nuestra membresia exclusiva para recibir ofertas y beneficios. 
              </FooterSubHeading>
              <FooterSubText>Puedes cancelar en cualqier momento</FooterSubText>
              <Form>
                <FormInput name="email" type="email" placeholder="Tu Email" />
                  <Button fontBig>Suscribete</Button> 
              </Form>
          </FooterSubscription>
          <FooterLinksContainer>
           <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
              <FooterLink to='/sign-up'>Como Funciona</FooterLink>
              <FooterLink to='/'>Testimonios</FooterLink>
              <FooterLink to='/'>Inversionistas</FooterLink>
              <FooterLink to='/'>Terminos de Servicio</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contactanos</FooterLinksTitle>
              <FooterLink to='/sign-up'>Correo electronico</FooterLink>
              <FooterLink to='/'>Numeros</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Redes Sociales</FooterLinksTitle>
              <FooterLink to='/sign-up'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinksItems>
           </FooterLinksWrapper> 
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
             <SocialLogo to="/">
              <SocialIcon/>
                EDDCODE
             </SocialLogo>
             <WebsiteRights>EDDCODE © 2021
             </WebsiteRights>
             <SocialIcons>
               <SocialIconLink href='/' target="_blank"
                aria-label="Facebook">
               <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank"
               aria-label="Instagram">
               <FaInstagram />
               </SocialIconLink>
               <SocialIconLink href='/' target="_blank"
               aria-label="Twitter">
               <FaTwitter />
               </SocialIconLink>
             </SocialIcons> 
            </SocialMediaWrap>
          </SocialMedia>
        </FooterContainer>
 )
}

export default Footer
