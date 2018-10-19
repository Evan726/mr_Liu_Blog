import service from '@/utils/request'
				
export function loginByUsername(userinfo) {
	console.log('11111111',userinfo)
    // const data = {
    //   username,
    //   password
    // }
    return service({
        url: 'pl/login',
        method: 'post',
        data: userinfo
    })
}
