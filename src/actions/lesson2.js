// import { REQUEST, RESPONSE } from '../constants'

export const REQUEST = "REQUEST"
export const RESPONSE = "RESPONSE"
export const ERROR = "ERROR"

const getResponse = ( data ) => ({
  type: RESPONSE,
  data: data
}) // чистый action creator

export const getUsersData = ( args ) => ( dispatch, getState ) => {
  console.log(' args ', args );
  dispatch( { type: REQUEST } )
  fetch('http://www.json-generator.com/api/json/get/bVbvtiEkya?indent=2')
    .then( res => res.json() )
    // .then( res => dispatch( { type: RESPONSE, data: res } ) )
    .then( res => dispatch( getResponse( res ) ))
    .catch( error => dispatch({ type: ERROR, error }))

  console.log('getState ', getState() );
}

export const GetPromiseUserData = () => ( dispatch, getState ) => {

  dispatch({
    type: 'PROMISE',
    actions: [REQUEST, RESPONSE, ERROR],
    promise: fetch('http://www.json-generator.com/api/json/get/bVbvtiEkya?indent=2').then( res => res.json() )
  })

}