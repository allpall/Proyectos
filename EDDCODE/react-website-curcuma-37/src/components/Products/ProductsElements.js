import styled from 'styled-components'

export const ProductsContainer = styled.div`
  color: #fff;
  width: auto; 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) /2);
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin: 0 auto;
`;
export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #D3AA41;
`;
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
`;
export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem; 
  text-align: center;
`;
export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;
export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;
export const ProductButton = styled.button`
  font-size: 1rem; 
  padding: 1rem 4rem;
  border: none;
  background: #c49702;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
      background: #D3AA41;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #000;
  }
`;

// #FED000