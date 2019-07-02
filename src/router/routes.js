import Tasks from 'pages/Tasks'
import Projects from 'pages/Projects'
import CostCenters from 'pages/CostCenters'
import Users from 'pages/Users'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/tasks',
        component: Tasks
      },
      {
        path: '/projects',
        component: Projects
      },
      {
        path: '/costCenters',
        component: CostCenters
      },
      {
        path: '/users',
        component: Users
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
