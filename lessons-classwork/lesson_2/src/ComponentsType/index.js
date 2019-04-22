import React from 'react';

import Stateless from './stateless';
import StateFull from './statefull';
// import StateFull from './statefull.es7';

const renderBlocks = [
  {
    title: 'Dog',
    error: true,
    sound: 'good boy'
  },
  {
    title: 'Cat',
    error: false,
    sound: 'meow'
  },
  {
    title: 'Dear',
    error: false,
    sound: 'Beeeee'
  }
];

/*
  В любой stateless компонент приходят пропсы как первый аргумент
*/

const ComponentsTypes = ({title}) => (
  <div>
    <h2>{title}</h2>
    <StateFull />
    {
      renderBlocks.map( (item, key) => {
        return (
          <Stateless
            key={key}
            title={item.title}
            error={item.error}
            sound={item.sound}
          />
        );
      })
    }
    <Stateless />
  </div>
);

export default ComponentsTypes;
