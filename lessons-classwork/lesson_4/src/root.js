import React, { Component } from 'react';
import './App.css';

/*
  Доки
  npm install react-router-dom  --save
    [react-router-dom] - Версия для веба
    [react-router-native] - Версия для react-native

*/
/*
  Доки
  npm install react-router-dom  --save
    [react-router-dom] - Версия для веба
    [react-router-native] - Версия для react-native

*/

import { BrowserRouter, HashRouter, Route, Redirect, Switch, Link, NavLink, Prompt } from 'react-router-dom';

import Contacts from './pages/contacts';
import Routes from './routes';

//https://caniuse.com/#feat=history
const supportsHistory = 'pushState' in window.history;

/*
  OLD: React-router v3;
  <Router>
    <Route path="/" component={App}>
       <IndexRoute component={Home} />
      <Route path="/post/1"/ component={Post}>
      <Route path="/post/2"/ component={Post}>
    </Route>
    <Route path="/home" />
  </Router>
*/

/*

  <Route />
  Параметр, который отвечает за то, что роут сработает если он точно совпадает с локацией (url);
  exact:
    path    loaction.pathname  exact   matches?
    /one    /one/two           true    no
    /one    /one/two           false   yes

  Параметр, который отвечает за закрывающий слеш в url. Не работает, если в url есть дополнительные сегменты.
  strict:
    path    location.pathname  matches?
    /one/   /one               no
    /one    /one/              yes
    /one    /one/two           yes
*/


const Company = ({match, location}) => {

  let renderSmsng = location.state !== undefined ? location.state.fromDashboard : false;
  let existedCompanies = [1,2,3,4];

  let status =  existedCompanies.some( item => item === Number(match.params.companyid) );
      console.log(status);
  if( status ){
  return(
    <div>
      {
          renderSmsng &&
          (
            <div>
              From Company Component
            </div>
          )
      }
      <nav>
        <Link className="myLink" to="/">Main Page</Link>
        <NavLink activeClassName="selected" className="myLink" to="/company/1">Comp 1</NavLink>
        <NavLink activeClassName="selected" className="myLink" to="/company/2">Comp 2</NavLink>
        <NavLink activeClassName="selected" className="myLink" to="/company/3">Comp 3</NavLink>
        <NavLink activeClassName="selected" className="myLink" to={{
          pathname: "/company/4",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
        >Comp 4</NavLink>
      </nav>
      <h1>Company id: {match.params.companyid}</h1>
    </div>
  )
  } else {
    return(
      <Redirect to='/company/not-found'/>
    )
  }
}


class Root extends Component {
  state = {
    created: false
  }
  createSmgng = () => {
    this.setState({
      created: true
    })
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter forceRefrech={!supportsHistory}>
        <Switch>
          {
            Routes.map( (route, index ) => {
              console.log( 'index', index, route);
              return <Route key={index} {...route} />;
            })
          }
        </Switch>

      </BrowserRouter>
      </div>
    );
  }
}

// <Route path="/" exact component={Main}/>
// <Route path="/contacts/" component={Contacts}/>
// <Route path="/company/:companyid"  component={Company}/>
// <Route render={NoFound}/>
// <Route path="/test" render={()=>{
//   if( false ){
//     return(<div><h1>YPA!</h1></div>)
//   }else{
//     return(<div><h1>FUUU!</h1></div>)
//   }
// }}/>
// <Route path="/list/" component={Main} />
// <Route path="/list/:componentname" component={Main} />
// <Redirect from="/test" to='/'/>
// <Route path="/exact" exact render={ () => {
//   return (<h1>Exact Route</h1>);}
// }/>
// <Route path="/post/" component={Post}/>
// <Route component={NoFound}/>
//

export default Root;
