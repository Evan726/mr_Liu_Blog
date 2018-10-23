import { loginByUsername, getUserInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        roles: [],
        token: '',
        introduction: '',
        avatar: '',
        name: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_INTRODUNCTION: (state, introduction) => {
            state.introduction = introduction
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_NAME: (state, name) => {
            state.name = name
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginByUsername(userInfo)
                    .then(response => {
                        const data = response.data
                        commit('SET_TOKEN', data.token)
                        setToken(response.data.token)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
        //获取登录信息
        GetUserInfo({ commit, state }, token) {
            return new Promise((resolve, reject) => {
                getUserInfo(token).then(response => {
                    if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
                        reject('error')
                    }
                    const data = response.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_INTRODUNCTION', data.introduction)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //退出登陆
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout().then(response => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject()
                })
            })
        }
    }
}

export default user
