import Main from './components/Main';
import NoFound from './components/NoFound';
import Contacts from './pages/contacts';
import List from './components/list';


const Routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/contacts',
    component: Contacts
  },
  // {
  //   path: '/company/:companyid',
  //   component: Company
  // },
  {
    component: List,
    path: '/list',
  },
  {
    component: NoFound,
    exact: true
  }

];

export default Routes;
