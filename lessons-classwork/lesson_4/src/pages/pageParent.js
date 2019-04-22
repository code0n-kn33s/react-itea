import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PageParent = () => {
  let TempArray = new Array(20).fill(0);
  console.log(TempArray);
  return(
    <div>
      Page Parent
      <ul>
      {
        TempArray.map( (item, index) => (
          <li key={index}><Link to={`/page/${index}`}>{index}</Link></li>
        ))
      }
      </ul>
    </div>
  );

}

export default PageParent;
