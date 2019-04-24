import React, {Component} from 'react'
import { connect } from 'react-redux'

class ListArticles extends Component {

  componentDidMount() {
    this.props.fetchListArticles()
    console.log('this.props', this.props);
  }

  render() {
    let { data } = this.props
    console.log(data);
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
  data: state.loadedData,
  loaded: state.loadedStatus
})

const MapDispatchToProps = (dispatch, props) => ({
  fetchListArticles: () => {
    dispatch({ type: "REQ_LIST_ARTICLES"})

    fetch('http://www.json-generator.com/api/json/get/ceNdVvyTCa?indent=2')
      .then( res => res.json() )
      .then( res => {
        dispatch({
          type: 'RES_LIST_ARTICLES',
          payload: res
        })
    })
  }
})
export default connect(MapStateToProps, MapDispatchToProps)(ListArticles)