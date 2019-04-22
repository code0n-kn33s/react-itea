import React, { Component } from 'react';

// class UnControlled extends Component {
//   state = {
//     textDemo: 'Null'
//   }
//   changeHandler = (e) => {
//     let value = e.target.value;
//     this.setState({
//       textDemo: value
//     })
//   }
//   render = () => {
//     let { textDemo } = this.state;
//     let { changeHandler } = this;
//     return(
//       <div>
//         <label htmlFor="textDemo">
//           <input id="textDemo" onChange={changeHandler} value={textDemo}/>
//         </label>
//
//         <label htmlFor="demo2">
//           <input id="demo2"/>
//         </label>
//       </div>
//     )
//   }
// }

const UnControlled = ({changeHandler, textDemo}) => {
  return(
    <div>
      <label htmlFor="textDemo">
        <input id="textDemo" onChange={changeHandler} value={textDemo}/>
      </label>
    </div>
  )
}

export default UnControlled;
