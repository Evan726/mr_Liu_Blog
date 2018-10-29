import request from '@/utils/request'

export function getRouter() {
    return request({
        url: 'getroute',
        method: 'get',
    })
}