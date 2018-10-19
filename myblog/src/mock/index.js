import Mock from 'mockjs'
import loginAPI from './login'


// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/pl\/login/, 'post', loginAPI.loginByUsername)

export default Mock
