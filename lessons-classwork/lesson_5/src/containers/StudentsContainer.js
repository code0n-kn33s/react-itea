import { connect } from 'react-redux';

import Students from '../components/students';

const AddCount = ( Component ) => {
    const mapStateToProps = (state, ownProps) => ({
        count: state.studentsCount
    });

    const mapDispatchToProps = (dispatch, ownProps) => ({
        add: (e) => {
            dispatch({ type: 'ADD_STUDENT'});
        },
        remove: (e) =>  {
            dispatch({ type: 'REMOVE_STUDENT'});
        }  
    })    
}


export default AddCount;

