import React, {useState} from 'react'
import Video from '../videos/video.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
          <HeroBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
            <HeroH1>Americas-104</HeroH1>
            <HeroP>
            Cafe, Productos Locales, Ayuda Psicologica, Terapia Fisica, Artesania y Ceramica.
            Somos todo eso y mas.    
            </HeroP>  
            <HeroBtnWrapper>
              <Button to='cafeweb' onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              >
                Conocenos {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>   
            </HeroBtnWrapper>
          </HeroContent>  
        </HeroContainer>
    )
}

export default Hero

//Tierra Latente Cafe
//¿Cómo te gusta el café? A nosotros contigo.
//Asi que visitanos y vive la experiencia.