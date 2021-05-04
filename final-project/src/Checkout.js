import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useState } from 'react';
import React from 'react'; 
import PastPurchases from './components/PastPurchases';

function Checkout({cart, setCart, carType, setCarType, check, setCheck, parkingPrice, setParkingPrice, logoutHandler, user, prevItems, setPrevItems}) {

  

  console.log(prevItems)

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        
        <Basket
          carType={carType}
          cart={cart}
          parkingPrice={parkingPrice}
          logoutHandler = {logoutHandler}
          user = {user}
          prevItems={prevItems}
          setPrevItems = {setPrevItems}
        ></Basket>
        <br />
        <br />
        <PastPurchases prevItems={prevItems} setPrevItems={setPrevItems}></PastPurchases>

      </div>
    </div>
  );
}

export default Checkout;
