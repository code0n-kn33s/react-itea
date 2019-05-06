import NotFound from '../lessons/lesson4/404'

import Lesson1 from '../lessons/lesson1 - listGuests/App'
import Lesson2 from '../lessons/lesson2 - toggle isShow/App'
import Lesson3 from '../lessons/lesson3 - routes/App'
import Lesson4 from '../lessons/lesson4/App'
import Lesson5 from '../lessons/lesson5 - redux p.1/App'
import Lesson6 from '../lessons/lesson6 - redux p.2/App'

const Routes = [
  {
    path: '/',
    exact: true,
    component: Lesson1
  },
  {
    path: '/lesson/2',
    exact: true,
    component: Lesson2
  },
  {
    path: '/lesson/3',
    component: Lesson3
  },
  {
    path: '/lesson/4',
    component: Lesson4
  },
  {
    path: '/lesson/5',
    component: Lesson5
  },
  {
    path: '/lesson/6',
    component: Lesson6
  },
  {
    conponent: NotFound
  }
]

export default Routes