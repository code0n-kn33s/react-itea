import React, {Component} from 'react'
import { connect } from 'react-redux'

class ListArticles extends Component {

  render() {
    return (
      <>
        <h2>List Articles</h2>
      </>
    )
  }
}

/*
  REDUX
*/
const MapStateToProps = (state, props) => ({
  data: state,
  list: state.list
})

const MapDispatchToProps = (dispatch, props) => ({
  fetchListArticles: () => {
    fetch('http://www.json-generator.com/api/json/get/ceNdVvyTCa?indent=2')
    .then( res => res.json() )
    .then( res => {
      dispatch({ listArticles: res })
    })
  }
})
export default connect(MapStateToProps, null)(ListArticles)