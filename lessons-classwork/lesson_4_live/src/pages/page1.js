import React, { Component } from 'react';
import { Switch, Route, Prompt } from 'react-router-dom'


class Page extends Component{

    state = {
        propmt: false
    }
    changeHandler = () => {
        this.setState({ propmt: !this.state.propmt});
    }
    render(){
        return(
            <>
                <h1>Hello, i'm a page 1 { this.state.propmt && 'show prompt'}</h1>
                <button onClick={this.changeHandler} > Change</button>
                {
                    this.state.propmt && ( <Prompt message="You sure wanna to leave that page?" /> )
                }

                 <Switch>
                    <Route exact path="/page/:pageid/comments" render={ () => (<h2>Comments</h2>)} />
                    <Route path="/page/:pageid/data" render={ () => (<h2>Data</h2>)} />
                    <Route path="/page/:pageid/users" render={ () => (<h2>Users</h2>)} />
                    <Route path="/page/:pageid/contacts" render={ () => (
                    <div>
                        <h1>Contacts</h1>
                    </div>
                )} />
                 </Switch>
            </>  
           
        )
    }
}

export default Page;

