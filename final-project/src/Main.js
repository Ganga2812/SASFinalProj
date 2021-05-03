import React from 'react';

const Main = ({logoutHandler, getData}) => {
    return(
        <div>
            <h1>Hello There</h1>
            <button onClick = {getData}>Data</button>
            <button onClick = {logoutHandler}>Log Out</button>
        </div>
    );
};

export default Main;