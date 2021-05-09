import React from 'react';
import { Button } from '../../globalStyles';
import { MdWeb } from 'react-icons/md';
import { FcMultipleDevices } from 'react-icons/fc';
import { GiCutDiamond} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nuestros Servicios</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <MdWeb />
                </PricingCardIcon>
                <PricingCardPlan>Pagina Web</PricingCardPlan>
                <PricingCardCost>$500</PricingCardCost>
                <PricingCardLength>por mes, durante un año</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>ó</PricingCardFeature>
                  <PricingCardFeature>$4,800</PricingCardFeature>
                  <PricingCardFeature>de un pago</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcMultipleDevices />
                </PricingCardIcon>
                <PricingCardPlan>App</PricingCardPlan>
                <PricingCardCost>$600-$900</PricingCardCost>
                <PricingCardLength>por mes, durante un año</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>ó $6000-$9000</PricingCardFeature>
                  <PricingCardFeature>de un pago, el precio varia</PricingCardFeature>
                  <PricingCardFeature>respecto a la complejidad</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Premium Dev</PricingCardPlan>
                <PricingCardCost>$800</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>ó $7000 de un pago</PricingCardFeature>
                  <PricingCardFeature>desarrollo web acelerado</PricingCardFeature>
                  <PricingCardFeature>soporte 24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;