const Routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/home',
    component: App
  },
  {
    path: '/post/:id',
    component: Post
  },
  {
    component: NoFound,
    exact: true
  }
];


ReactDOM.render(
  <BrowserRouter basename="/" forceRefrech={!supportsHistory}>
    <div className="App">
      <Switch>
      {
        Routes.map( (route, index ) => {
          console.log( 'index', index, route);
          return <Route key={index} {...route} />;
        })
      }
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
