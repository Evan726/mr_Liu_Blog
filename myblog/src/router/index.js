import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout'
// import Home from '@/views/home'
// import Login from '@/views/login'

Vue.use(Router)
export const constantRouterMap = [{
        path: '/login',
        component: _import('login/index'),
        hidden: true
    }, {
        path: '/404',
        component: _import('errorPage/index'),
        hidden: true
    },
    // {
    //     path: '',
    //     name: 'layout',
    //     component: Layout,
    //     redirect: "/index",
    //     children: [{
    //         path: 'index',
    //         name: 'Home',
    //         component: _import('home/index'),
    //         meta: { title: '首页', icon: 'home' }
    //     }]
    // },
]
export default new Router({
    routes: constantRouterMap
})


export const asyncRouterMap = [{
    path: '/icon',
    component: Layout,
    redirect: "/icon",
    children: [{
        path: '',
        component: _import('svg-icons/index'),
        name: 'icons',
        meta: { title: 'icons', icon: 'icon'}
    }]
}, {
    path: '/components',
    component: Layout,
    redirect: '/components/tinymce',
    meta: {
        title: '组件',
        icon: 'component'
    },
    children: [{
            path: 'tinymce',
            component: _import('components/tinymce'),
            name: 'tinymce',
            meta: { title: '编辑器' }
        },
        {
            path: 'avatar-upload',
            component: _import('components/avatarUpload'),
            name: 'avatarUpload',
            meta: { title: '上传头像' }
        }, {
            path: '/components/form',
            component: _import('Index'),
            name: 'form',
            meta: { title: '表单' },
            redirect: "/components/form/element",
            children: [{
                path: 'element',
                component: _import('components/form/element'),
                name: 'icons',
                meta: { title: 'icons', icon: 'icon'},
                children: null
            },
            {
                path: 'group',
                component: _import('components/form/group'),
                name: 'group',
                meta: { title: 'group', icon: 'group' },
                children: null
            }]
        },
    ]
}]




