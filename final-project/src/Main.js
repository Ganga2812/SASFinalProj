import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

const Main = ({logoutHandler, getData}) => {
    return(
        <div>
            <h1>Hello There</h1>
                <button onClick = {getData}>Data</button>
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