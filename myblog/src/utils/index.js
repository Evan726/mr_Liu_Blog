//格式化Url
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  console.log('1',JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'))
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}