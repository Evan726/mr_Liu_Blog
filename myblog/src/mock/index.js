import Mock from 'mockjs'
import loginAPI from './login'
import routeAPI from './urlRouter'


// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/pl\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/login\/logout/, 'post', loginAPI.logout)

Mock.mock(/getroute\.*/, 'get', routeAPI.getRouter)
export default Mock
