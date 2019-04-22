import React, { Component } from 'react';


class Page extends Component {

    state = {
        post: null
    }

    componentDidMount(){
        const { pageid } = this.props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/posts/${pageid}`)
            .then( res => res.json() )
            .then( res => {
                this.setState({
                    post: res
                })
            })
    }

    render(){
        const { post } = this.state;

        if( post === null){
            return(<div>Page in loading...</div>)
        } else {
            return(
                <div>
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}
                    </p>
                </div>
            )
        }

    }

}


export default Page;
