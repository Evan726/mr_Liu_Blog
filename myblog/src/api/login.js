import request from '@/utils/request'

export function loginByUsername(userinfo) {
    return request({
        url: 'pl/login',
        method: 'post',
        data: userinfo
    })
}

export function getUserInfo(token) {
  return request({
    url: 'user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'login/logout',
    method: 'post'
  })
}