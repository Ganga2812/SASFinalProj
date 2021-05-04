import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductDesc,
  ProductInfo,
  ProductCategory,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data, cart, setCart, check, setCheck, carType, setCartype, parkingPrice, setParkingprice }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} id={product.category} />
              <ProductInfo>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick = {() => {
                if(heading == 'Pick Your Sweet Ride'){
                  setCart(product.cost);
                  setCartype(product.name);
                }else{
                  setCart(cart + product.cost);
                  setParkingprice(product.cost)
                } }} >{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
