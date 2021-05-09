import React from 'react';
import {homeObj3, homeObjOne, homeObjTwo} from './Data';
import {InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Pricing />
          <InfoSection {...homeObj3} />  
        </>
    )
}

export default Home
