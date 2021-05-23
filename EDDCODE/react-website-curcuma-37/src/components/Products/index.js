import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({heading, data, id, lightBg, lightText, darkText}) => {
    return (
        <ProductsContainer lightBg={lightBg} id={id}>
            <ProductsHeading lightText={lightText}>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} 
                            alt={product.alt} />
                            <ProductInfo>
                               <ProductTitle darkText={darkText}>{product.name}</ProductTitle>
                               <ProductDesc darkText={darkText}>{product.desc}</ProductDesc>
                               <ProductPrice darkText={darkText}>{product.price}</ProductPrice>
                               <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products

//<ProductButton>{product.button}</ProductButton>