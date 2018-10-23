import request from '@/utils/request'

export function getRouter(userinfo) {
    return request({
        url: 'getroute',
        method: 'get',
    })
}