import React from 'react';

const Navigation = ({activeTab, buttons, changer}) => {
  return(
    <nav className="header__nav">
    {
      buttons.map( ( button, key ) => {
        let active = false;
        if( activeTab === button.id ){
          active = true;
        }
        return(
          <button
            key={key}
            data-id={button.id}
            className={ active ? 'active' : null}
            onClick={changer}
          >
            {button.title}
          </button>
          )
      })
    }
    </nav>
  );
}

export default Navigation;
