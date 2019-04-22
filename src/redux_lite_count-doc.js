import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return state + 1

    case "REMOVE_COUNT":
      return state - 1

    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe( () => {
  console.log('store.getState()', store.getState() )
  console.log('store', store )
})

store.dispatch( { type: 'ADD_COUNT'} )
store.dispatch( { type: 'ADD_COUNT'} )
store.dispatch( { type: 'REMOVE_COUNT'} )