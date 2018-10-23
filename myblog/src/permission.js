import router from './router'
import store from './store'
import NProgress from 'nprogress' // 导入全站进度条插件
import 'nprogress/nprogress.css' // 导入全站进度条插件样式
import { getToken } from './utils/auth'
const whiteList = ['/login',"/404"] // 白名单
import { asyncRouterMap, constantRouterMap } from '@/router'
router.beforeEach((to, from, next) => {
    NProgress.start() // 开始加载进度条
    //判断登陆状态
    if (getToken()) {
        //登录成功
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() //结束进度条
        } else {
            console.log('22222222',store.getters.roles.length)
            if (store.getters.roles.length === 0) {
                // store.dispatch('GetUserInfo').then(res => { // 拉取user_info
                //     const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
                //     store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
                //         router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                //         next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                //     })
                // }).catch(() => {
                //     store.dispatch('FedLogOut').then(() => {
                //         Message.error('Verification failed, please login again')
                //         next({ path: '/login' })
                //     })
                // })
                store.dispatch("GetUserInfo", getToken()).then(res => {
                    router.addRoutes(asyncRouterMap)
                    store.dispatch('GenerateRoutes',constantRouterMap).then((response) => {

                    }).catch(error => {

                    })
                    next({ path: '/' })
                }).catch(error => {
                    next({ path: '/login' })
                })
            } else {
                next()
            }
        }

    } else {
        //登陆失败
        if (whiteList.indexOf(to.path) !== -1) {
            //是否不需要登陆可见
            next()
        } else {
            next('/login')
            NProgress.done() //结束进度条
        }
    }
})

router.afterEach(() => {
    NProgress.done() //结束进度条
})
