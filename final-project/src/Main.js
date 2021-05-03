import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

const Main = ({logoutHandler}) => {
    return(
        <div>
            <button onClick = {logoutHandler}>Log Out</button>
        <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Pick Your Sweet Ride' data={productData}/>
        <Feature />
        <Products heading='Grab a Parking Spot' data={productDataTwo} />
        <Footer/>
        </Router>
      </div>
    );
};

export default Main;