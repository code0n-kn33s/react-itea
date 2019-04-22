import React, { Component } from 'react';


const Page = ({ location }) => {
    let color = null;
    if( location.state !== undefined){
        color =  location.state.color;
    }

    return(
        <h1 style={{ color: color }}>Hello, i'm a page 3</h1>
    );

}

export default Page;

