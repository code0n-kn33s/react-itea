import React from 'react';
// PropTypes Импортится как отедльная библиотека
import PropTypes from 'prop-types';


const CompWithPropTypes = ( props ) => {
  console.log(props);
  return(
    <div>
      <h2>I have props</h2>
      <div>
        {
          props.children
        }
      </div>
    </div>
  );
};

CompWithPropTypes.propTypes = {
  // https://github.com/facebook/prop-types
  children: PropTypes.element.isRequired,
  stringProp: PropTypes.string,
  arrayProp: PropTypes.array.isRequired,
  somethingTrue: PropTypes.bool,
  action: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['Foo', 'Bar']).isRequired,
  ReactEl: PropTypes.element.isRequired,
  user: PropTypes.shape({
   name: PropTypes.string.isRequired,
   count: PropTypes.number
  }),
  someStuff: PropTypes.any.isRequired
};

export default CompWithPropTypes;
