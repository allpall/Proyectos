import React, {useState} from 'react'
import Video from '../videos/video.mp4';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
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
            <HeroH1>Curcuma37</HeroH1>
            <HeroP>
             Lo natural en su mejor versión  
            </HeroP>  
            <HeroBtnWrapper>
            
            </HeroBtnWrapper>
          </HeroContent>  
        </HeroContainer>
    )
}

export default Hero



//<//Button to='cafeweb' onMouseEnter={onHover} 
             // onMouseLeave={onHover}
             // primary='true'
             // dark='true'
             // >
               // Conocenos {hover ? <ArrowForward /> : <ArrowRight />}
             // </>  //