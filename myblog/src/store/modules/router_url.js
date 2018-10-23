// import { asyncRouterMap, constantRouterMap } from '@/router'
import { getRouter } from '@/api/getUrlRouter'






const router_url = {
    state: {
        routers: [],
        addRouters: [],
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.routers = routers
        }
    },
    actions: {
        GenerateRoutes({ commit }) {
            return new Promise((resolve, reject) => {
                getRouter().then(response => {
                    var data = response.data
                    commit("SET_ROUTERS",data)
                    rosolve()
                }).catch(error => {
                    reject(error)
                })
                resolve()
            })
        }
    }
}

export default router_url
