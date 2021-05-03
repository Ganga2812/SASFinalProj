import React from 'react';

const Main = ({logoutHandler}) => {
    return(
        <div>
            <h1>Hello There</h1>
            <button onClick = {logoutHandler}>Log Out</button>
        </div>
    );
};

export default Main;