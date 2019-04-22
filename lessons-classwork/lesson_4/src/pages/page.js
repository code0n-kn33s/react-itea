import React, { Component } from 'react';
// https://jsonplaceholder.typicode.com/posts/1
class Page extends Component{
  state = {
    loading: false,
    loaded: false,
    data: {},
  }

  componentDidMount(){
    let { match } = this.props;
    this.setState({
      loading: true
    })
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        data: json,
        loading: false,
        loaded: true
      })
    })
  }

  render = () => {
    console.log('render');
    let { data, loading, loaded } = this.state;
    if( loading === true){
      return(<div>Loader</div>)
    }
    if( loaded === true ) {
      return(
        <div>
          <h1>{data.title}</h1>
          <p>
            {data.body}
          </p>
         </div>
      );
    }
    if( loaded === false && loading === false){
      return(<div>Placeholder</div>)
    }
  }
}

export default Page
