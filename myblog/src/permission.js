import router from './router'
import store from './store'
import NProgress from 'nprogress' // 导入全站进度条插件
import 'nprogress/nprogress.css' // 导入全站进度条插件样式
import { getToken } from './utils/auth'
const whiteList = ['/login', "/404"] // 白名单
router.beforeEach((to, from, next) => {
    NProgress.start() // 开始加载进度条
    //判断登陆状态
    if (getToken()) {
        //登录成功
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() //结束进度条
        } else {
            if (store.getters.name === '') {
                store.dispatch("GetUserInfo", getToken()).then(res => {
                    store.dispatch('GenerateRoutes').then((response) => {
                        router.addRoutes(store.getters.addRouters)
                        //router.addRoutes(asyncRouterMap)
                        if (to.path === "/") {
                            next({ path: '/home' })
                        } else {
                            next({ ...to, replace: true })
                        }
                    }).catch(error => {
                        console.log('error', error)
                        store.dispatch('logout').then(() => {
                            next({ path: '/login' })
                        })
                    })
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
