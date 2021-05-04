import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Checkout from './Checkout';


const Main = ({logoutHandler, user}) => {
    const [cart, setCart] = useState(0);
    const [check, setCheck] = useState(false);
    const [carType, setCartype] = useState('none');
    const [parkingPrice, setParkingprice] = useState(0);
    console.log(cart);
    console.log(carType);
    console.log(parkingPrice);

    return (
        <div>
          {check ? (
            <Checkout 
              cart = {cart}
              setCart = {setCart}
              carType = {carType}
              setCartype = {setCartype}
              check = {check}
              setCheck = {setCheck}
              parkingPrice = {parkingPrice}
              setParkingprice = {setParkingprice}
              logoutHandler = {logoutHandler}
              user = {user}
            />
          ) : (
            <div>
            <Router>
            <GlobalStyle />
            <Hero check={check} setCheck={setCheck}/>
            <Products heading='Pick Your Sweet Ride' data={productData} cart={cart} setCart={setCart} carType = {carType} setCartype={setCartype}/>
            <Feature />
            <Products heading='Grab a Parking Spot' data={productDataTwo} cart={cart} setCart={setCart} parkingPrice = {parkingPrice} setParkingprice = {setParkingprice}/>
            <Footer/>
            </Router>
            <button onClick = {logoutHandler}>Log Out</button>
            </div>
          )} 
        </div>
      );
};


export default Main;