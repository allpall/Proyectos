import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Promocion del dia</h1>
            <p>En la compra 2 pizzas llevate unas papas
            de acompañamiento gratis!!!</p>
            <FeatureButton>Ordena ya</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
