import { loginByUsername } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'

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
        LoginByUsername({ commit }, userInfo) {
            console.log('userInfo', userInfo)
            return new Promise((resolve, reject) => {
                loginByUsername(userInfo)
                    .then(response => {
                        const data = response.data
                        commit('SET_TOKEN', data.token)
                        commit('SET_INTRODUNCTION', data.introduction)
                        commit('SET_AVATAR', data.avatar)
                        commit('SET_ROLES', data.roles)
                        commit('SET_NAME', data.name)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
            })
        }
    }
}

export default user
