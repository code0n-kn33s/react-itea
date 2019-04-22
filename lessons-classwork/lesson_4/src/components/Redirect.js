<div>
  <Redirect from='/post/5' to='/home'/>
  <Redirect from='/post/6' to={{
    pathname: '/exact',
    search: '?utm=your+face',
    state: {
      referrer: 'fd'
    }
  }}/>
</div>;
