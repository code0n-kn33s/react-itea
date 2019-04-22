
const initialState = {
    lesson : 5,
    course: 'React.js',
    studentsCount: 0,

    loadedData: [],
    loadedStatus: false,
    filtredData: []
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
          studentsCount: state.studentsCount + 1
        }

      case 'REMOVE_STUDENT':
        return {
          ...state,
          studentsCount: state.studentsCount - 1
        }

      case 'DATA_REQ':
        return{
          ...state,
          loadedStatus: false
        }

      case 'DATA_RES':
        return{
          ...state,
          loadedStatus: true,
          loadedData: action.payload
        }

      case 'FILTER_DATA':
        return{
          ...state,
          filtredData: state.loadedData.filter( item => item.isActive === action.payload )
        }

      default:
        return state;
    }
  };


export default reducer;