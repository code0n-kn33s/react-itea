import React, {Component} from 'react'
import { connect } from 'react-redux'

class ListArticles extends Component {

  componentDidMount() {
    this.props.fetchListArticles()
  }

  render() {
    let { data, count, loaded } = this.props
    let arr = data.slice(0, count)
    console.log('PROPS', this.props);
    return (
      <>
        <h2>List Articles</h2>
        {
          loaded === false ?
            <div> LOADING... </div> :
          arr !== null && arr.map( item => {
            return (
              <div key={item.index} style={{ width: '22%', padding: '5px', margin: '5px', border: '1px solid grey', display: 'inline-block', verticalAlign: 'top'}}>
                <h4>{item.name}</h4>
                <div>{item.address}</div>
                <div>{item.email}</div>
                <h5>{item.balance}</h5>
              </div>
              )
          } )
        }
      </>
    )
  }
}

/*
  REDUX
*/
const MapStateToProps = (state, props) => ({
  data: state.studentsCount.loadedData,
  loaded: state.studentsCount.loadedStatus,
  count: state.studentsCount.studentsCount
})

const MapDispatchToProps = (dispatch, props) => ({
  fetchListArticles: () => {
    dispatch({ type: "REQ_LIST_ARTICLES"})

    fetch('http://www.json-generator.com/api/json/get/ceNdVvyTCa?indent=2')
      .then( res => res.json() )
      .then( res => {
        console.log("RES listArt", res)
        dispatch({
          type: 'RES_LIST_ARTICLES',
          payload: res
        })
    })
  }
})
export default connect(MapStateToProps, MapDispatchToProps)(ListArticles)