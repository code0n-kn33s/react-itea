const rootReducer = () => { console.log('REDUSER IS WORK')}

const initialState = {
  lesson : 5,
  course: 'React.js',
  studentsCount: 0,

  title: 'List Articles',
  loadedStatus: false,
  listArticles: []
};

function reducer(state = initialState, action){
  switch( action.type ){
    case 'CHANGE_COURSE':
      return {
        ...state,
        course: action.course
      }

    case 'ADD_STUDENT':
      return {
        ...state,
        studentsCount: ++state.studentsCount
      }

    case 'REMOVE_STUDENT':
      return {
        ...state,
        studentsCount: --state.studentsCount
      }

    case 'REQ_LIST_ARTICLES':
      return {
        ...state,
        loadedStatus: false
      }
    case 'RES_LIST_ARTICLES':
      return {
        ...state,
        loadedStatus: true
      }
    default:
      return state;
  }
}

export default reducer