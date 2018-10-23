const routerMap = [{
    File: "",
    Icon: "home",
    IsView: true,
    Name: "系统首页",
    Route: "/home",
    children: null,
}, {
    File: "layout/Layout",
    Icon: "icon",
    IsView: true,
    Name: "Icon",
    Route: "/icon",
    children: null,
}, {
    File: "layout/Layout",
    Icon: "components",
    IsView: true,
    Name: "组件",
    Route: "/components",
    children: [{
        File: "components/tinymce",
        Icon: "tinymce",
        IsView: true,
        Name: "编辑器",
        OrderIndex: 0,
        Route: "/tinymce",
        children: null,
    }, {
        File: "components/avatarUpload",
        Icon: "avatar",
        IsView: true,
        Name: "上传头像",
        OrderIndex: 0,
        Route: "/avatar-upload",
        children: null,
    }]
}]


export default {
    getRouter: config => {
    	console.log('config',config)
        // const { account } = JSON.parse(config.body)
        return routerMap
    },
}
