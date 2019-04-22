import React from 'react';
import { connect } from 'react-redux';

const Students = ({ add, remove, count}) => (
    <div>
        <button onClick={add}>+</button>
        <b>{count}</b>
        <button onClick={remove}>-</button>
    </div>
);


/*
    Redux
*/
const mapStateToProps = (state, ownProps) => ({
    count: state.studentsCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: (e) => {
        dispatch({ type: 'ADD_STUDENT'});
    },
    remove: (e) =>  {
        dispatch({ type: 'REMOVE_STUDENT'});
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Students);
