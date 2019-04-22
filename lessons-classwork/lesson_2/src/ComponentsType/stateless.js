import React from 'react';

const StateLess = ({title, sound, error}) => {
/*
  Функция которая принимает props
  Так же тут можно использовать деструктуризацю, что бы сразу

  Прокинуть в компонент деструктуризированные данные:
  const StateLess = ({ value1, value2}) => { ... }
  Создаст переменные value1, value2 и присвоит туда значения из
  this.props.value1 и this.props.value2
*/

/*
  Внутри мы можем обьявлять локальные переменные и функции
*/
  const doMyStateLessStuff = () => {
    if( title === 'Dog'){
      console.log('I\'m a',  title, 'and i am a', sound);
    } else {
      console.log('I\'m a',  title, 'and i say', sound);
    }
  };

  return (
    <div className={error === false ? "StateLessContainer" : "StateLessContainer error"}>
        <h2>Hello, I'm a stateless component.</h2>
        <div>
        {
          error === true ? <span>Error</span> : <span>Everything Fine</span>
        }
        </div>
        <button onClick={doMyStateLessStuff }>
            Yes. I can work with functions my name is {title} and i say {sound}!
        </button>

    </div>
  );
};

/*
  Способ обьявить статичное свойство defaultProps (значения пропсов по умолчанию).
  Такой похдход подходит для statless компонентов.


  Best-practice для stateful обьявлять их как можно выше,
  что бы человек когда откроет код, сразу видел их значения
  по умолчанию.

*/

StateLess.defaultProps = {
  title: 'bird',
  sound: 'kar'
};



export default StateLess;
