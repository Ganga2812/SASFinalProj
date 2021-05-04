import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  
  const [number, setNumber] = useState('');
  const [names, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [focused, setFocus] = useState('');

    return (
      <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>

              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
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
              </form>
            </div>

              <div className="row">
                <button onClick={() => alert('Order has been sent')}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  
}
