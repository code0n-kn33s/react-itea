import React, { Component } from 'react';

const About = ({match, location}) => (
  <div>
    <h2 style={
      location.state !== undefined ?
        {color: location.state.color} :
        null
      }>About</h2>
  </div>
)

export default About;
