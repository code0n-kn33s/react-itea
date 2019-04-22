import React, { Component } from 'react';
import { connect } from 'react-redux';


class SuperList extends Component{

    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        const { loading, data, filterData } = this.props;
        return(
            <div>
                <h2>List</h2>
                <button onClick={filterData}> Filter </button>
                {
                    loading === false ?
                        (
                            <div> Loading </div>
                        ) :
                        (
                            <>
                                {
                                    data.map( item => {
                                        console.log('item', item);
                                        return ( 
                                            <div>
                                                <b>{item.isActive ? 'TRUE' : 'FALSE'}</b>
                                                <span>{item.title}</span>
                                            </div>);
                                    })
                                }
                            </>
                        )
                }
            </div>
        )
    }
}


/*
    Redux
*/
const mapStateToProps = (state, ownProps) => ({
    data:  state.filtredData.length !== 0 ?  state.filtredData : state.loadedData,
    loading: state.loadedStatus
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    filterData: () => {
        dispatch({ type: 'FILTER_DATA', payload: true})
    },
    fetchData: () => {
        dispatch({type: 'DATA_REQ'});
        fetch('http://www.json-generator.com/api/json/get/coKLTbAkRK?indent=2')
            .then( res => res.json() )
            .then( res => {
                dispatch({
                    type: 'DATA_RES',
                    payload: res
                })
            });


    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SuperList);



