/*

  Императивное и декларативное программирование

*/


// Пример императивного кода, который описывает как что либо работает
const toLowerCaseImp = input => {
  const output = [];                       // Создай новый пустой массив
  for (let i = 0; i < input.length; i++) { // Перебери входящий массив
    output.push(input[i].toLowerCase());   // Добавь в массив новый элементы со старого в которых уменьшены буквы
  }
  return output;                           // Верни результат
};



console.time('imp');
console.log( toLowerCaseImp(['FOO', 'BAR', 'BAZ']) ); // ['foo', 'bar', 'baz']
console.timeEnd('imp');





// Пример декларативного кода, который описывает какой результат мы хотим получить
const toLowerCaseDec = input => input.map(
  value => value.toLowerCase()
);
console.time('dec');
console.log( toLowerCaseDec(['FOO', 'BAR', 'BAZ']) ); // ['foo', 'bar'];
console.timeEnd('dec');
// + Значительно уменьшает размер кода в вашем приложении
// + Ускоряет время работы
// + Код легче читается и имеет меньше багов
// + Отсутствие лишних переменных за изменением которых нужно следить
// - Такой код немного сложнее понимать, первое время





// Imperative
// const map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 4,
//   center: myLatLng,
// });
//
// const marker = new google.maps.Marker({
//   position: myLatLng,
//   title: 'Hello World!',
// });
//
// marker.setMap(map);


// Declarative
// <Gmaps zoom={4} center={myLatLng}>
//   <Marker position={myLatLng} Hello world! />
// </Gmaps>



// ES6 vs ES7 Classes

// ES6
class App extends Component {
constructor(props){
  super(props);
  this.state = {
   myStateData: 1
  }
  this.someStuff = this.someStuff.bind(this);
}
someStuff(event){
  console.log( event );
}
render() {...}
}


// ES7
// class App extends Component {
//   state = {
//     myStateData: 1
//   }
//   someStuff = (event) => {
//     console.log( event )
//   }
//   render = () =>{
//     <div>
//       myApp
//     </div>
//   }
// }

// React 13.0
// React.createClass({
//   getInitialState : function() {
//     return {
//       name : "Petro"
//     };
//   },
//   render: function(){
//     return(
//       <div>
//         old stuff
//       </div>
//     );
//   }
// });
