import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/admin/',
    mode : 'history',
    routes : [
//      {
//          path : '/',
//          component : () => import()
//      }
    ]
})


export default router;