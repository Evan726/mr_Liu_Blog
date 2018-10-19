import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout'
// import Home from '@/views/home'
// import Login from '@/views/login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: _import('login/index'),
            hidden: true
        },  { 
            path: '/404', 
            //component: _import('errorPage/404'),
        },
        {
            path: '',
            name: 'layout',
            component: Layout,
            redirect: "/index",
            children: [{
                path: 'index',
                name: 'Home',
                component: _import('home/index'),
                meta: { title: '首页', icon: 'home'}
            }]
        },

    ]
})
