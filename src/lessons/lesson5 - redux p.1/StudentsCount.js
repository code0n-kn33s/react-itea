import React from 'react'
import { connect } from 'react-redux'

const App = ( {add, remove, count} ) => {
  return (
    <div>
      <button onClick={remove}>-</button>
      <b>{count}</b>
      <button onClick={add}>+</button>
    </div>
  )
}

/*
  REDUX
*/

const mapStateToProps = (state, ownProps) => ({
  test: state,
  count: state.studentsCount

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  add: () => {
    dispatch({ type: 'ADD_STUDENT' })
  },
  remove: () => {
    dispatch({ type: 'REMOVE_STUDENT' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)