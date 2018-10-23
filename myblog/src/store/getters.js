const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    status: state => state.user.status,
    roles: state => state.user.roles,
    // sidebar: state => state.app.sidebar,
    // language: state => state.app.language,
    // visitedViews: state => state.tagsView.visitedViews,
    // cachedViews: state => state.tagsView.cachedViews,
    // token: state => state.user.token,
    // avatar: state => state.user.avatar,
    // name: state => state.user.name,
    // introduction: state => state.user.introduction,
    // status: state => state.user.status,
    // roles: state => state.user.roles,
    // setting: state => state.user.setting,
    _routers: state => state.router_url.routers,
    // addRouters: state => state.permission.addRouters,
    // errorLogs: state => state.errorLog.logs
}
export default getters
