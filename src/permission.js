import router from './router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  console.log('permission', to, from, next)
  NProgress.start()
  next()
})

router.afterEach((to) => {
  NProgress.done()
})
