import React, {Component, useEffect, useState} from 'react';
import fire from '../fire.js';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function Basket(props) {
  const { carType, cart, parkingPrice, logoutHandler, user, prevItems, setPrevItems} = props;

  
  const [number, setNumber] = useState('');
  const [names, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [focused, setFocus] = useState('');
  const [address, setAddress] = useState('');
  const [pastPurchases, setPastPurchases] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  function setData(){
    setPrevItems(prevItems+" "+carType)
    fire.firestore().collection("Users").doc(fire.auth().currentUser.uid).set({
      Address: address,
      Name: names,
      PastPurchases: prevItems,
      PhoneNumber: phoneNumber
  })
  }

    return (
      <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
          {cart === 0 && <div>Cart is empty</div>}

          {cart !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">{carType}: </div>
                <div className="col-1 text-right">${(cart-parkingPrice).toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Parking Price</div>
                <div className="col-1 text-right">${parkingPrice.toFixed(2)}</div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${cart.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div id="PaymentForm">
              <Cards
                number={number}
                name={names}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
              />
              <form>
                <input type="tel" name="number" placeholder="Card Number" value={number} 
                onChange={e => setNumber(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type="text" name="name" placeholder="Name" value={names} 
                onChange={e => setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type="text" name="expirt" placeholder="MM/YY" value={expiry} 
                onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type="tel" name="cvc" placeholder="CVC" value={cvc} 
                onChange={e => setCVC(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type="text" name="address" placeholder="Address" value={address} 
                onChange={e => setAddress(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
                <input type="text" name="phoneNumber" placeholder="XXX-XXX-XXXX" value={phoneNumber} 
                onChange={e => setPhoneNumber(e.target.value)}
                onFocus={e => setFocus(e.target.name)}
                />
              </form>
            </div>

              <div className="row">
                <button onClick={() => {
                  setData();
                  alert("Your order has been confirmed");
                  }}>
                  Checkout
                </button>
                <button onClick={logoutHandler}>Logout</button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  
}
