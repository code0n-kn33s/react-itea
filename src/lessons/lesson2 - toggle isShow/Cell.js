import React, { Component } from 'react';

/*
  В JSX у компонента может быть открывающий и закрывающий теги.
  Все что попадет между ними, будет переданно во внутрь как props
*/

const Cell = ({ children }) => (
  <div className="myChildrenComponent">
    Lets render here some stuff!
    <div>
    {
      /*
        Во внутрь child мы можем передать:
        - Текст
        - HTML <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
        - Component Один или несколько компонентов
        - Expression - JS выражение

        Booleans, null и undefined - Валидные дочерние елементы,
        просто они не будут отрисованы.

      */
    }
      one cell
    </div>
  </div>
);

export default Cell;
