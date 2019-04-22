import { connect } from 'react-redux'

import StudentsCount from '../lessons/lesson5/StudentsCount'

const AddCount = (Component) => {

  const mapStateToProps = (state, ownProps) => ({
    // test: true
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

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}

// AddCount(StudentsCount)

export default AddCount