import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Promocion de Lunes a Miercoles</h1>
            <p>Rollos clasicos 2 x $100</p>
            <p>Rollos especiales y empanizados 2 x $120</p>
            <FeatureButton>Ordena ya</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
