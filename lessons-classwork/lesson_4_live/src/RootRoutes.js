// import Main from './components/Main';
import NotFound from './pages/notFound';
import Page from './pages/';
import Page1 from './pages/page1';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Page1
  },
  {
    path: '/page/2',
    component: Page
  },
  {
    component: NotFound
  }

];

export default Routes;
