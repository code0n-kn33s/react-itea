import React from 'react';

  class MyTestComponentBefor16_4 extends React.Component {
    // MOUNT
    // 0. Init
    // 1. ComponentWillMount
    // 2. Render
    // 3. ComponentDidMount
    // UPDATE
    // 4. ComponentWillRecieveProps
    // 5. ShouldComponentUpdate
    // 6. ComponentWillUpdate
    // 2. Render
    // 8. ComponentDidUpdate
    // UNMOUNT
    // 9. ComponentWillUnmount

  };

  class MyTestComponentAfter16_4 extends React.Component{
    // MOUNT
    // 0. Init
    // 1. getDerivedStateFromProps
    // 2. Render.
    // 3. ComponentDidMount
    // UPDATE
    // 1. getDerivedStateFromProps
    // 5. ShouldComponentUpdate
    // 2. Render
    // 6. getSnapshotBeforeUpdate
    // 7. ComponentDidUpdate
    // UNMOUNT
    // 8. ComponentWillUnmount
  }


  export default { MyTestComponentAfter16_4, MyTestComponentAfter16_4 };
