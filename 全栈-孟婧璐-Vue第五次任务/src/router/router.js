import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),/*history模式*/
  routes: [{
    path: '/home',
      name: 'Home',
    component: Home,
      props: (route) => ({
        selected: route.query.selected,
        inputValue: route.meta.inputValue || ''
      })
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    to.meta = {
      inputValue: from.meta.inputValue || ''
    }
    to.query = {
      ...from.query,
      ...to.query
    }
  }
  next()
})

export default router