import Tasks from 'pages/Tasks'
import Index from 'pages/Index'

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
        path: '/index',
        component: Index
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
