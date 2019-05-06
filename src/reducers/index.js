const initialState = {
  lesson : 5,
  course: 'React.js',
  studentsCount: 0,

  title: 'List Articles',
  loadedData: [],
  loadedStatus: false
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

    case 'REQ_DATA': 
      return {
        ...state,
        loadedStatus: false
      }
    case 'RES_LIST_ARTICLES':
      return {
        ...state,
        loadedStatus: true,
        loadedData: action.payload
      }
    default:
      return state;
  }
}

export default reducer