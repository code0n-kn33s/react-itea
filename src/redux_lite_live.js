
import { createStore, compose } from "redux";

// Методы :
// dispatch - мы вносим изменение в store
// getState - получить текущий обьект store
// subscribe - мы подписываемся на изменения в свойстве store

const composeEnhancers =  process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initialState = {
  lesson : 5,
  course: 'React.js',
  studentsCount: 0
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

    default:
      return state;
  }
};

const store = createStore( reducer, composeEnhancers() );

  // console.log('REDUX STORE:', store );

  // const NewCourse = {
  //   type: 'CHANGE_COURSE',
  //   payload: 'Angular.js'
  // }
  // store.dispatch(NewCourse);
  console.log('REDUX STORE:', store.getState() );

  const addBtn = document.getElementById('addStudent');
  const removeBtn = document.getElementById('removeStudent');
  const currentCount = document.getElementById('currentCount');

  const render = () => {
      currentCount.innerText = store.getState().studentsCount;
  };
  store.subscribe( render );

  const addStudent = { type: 'ADD_STUDENT'}
  const removeStudent = { type: 'REMOVE_STUDENT'}

  addBtn.addEventListener('click', ()=>{
    store.dispatch(addStudent);
  })
  removeBtn.addEventListener('click', ()=>{
    store.dispatch(removeStudent);
  })
