const routerMap = [{
    File: "home/index",
    Icon: "home",
    IsView: true,
    Name: "系统首页",
    Route: "/home",
    children: null
}, {
    File: "svg-icons/index",
    Icon: "icon",
    IsView: true,
    Name: "Icon",
    Route: "/icon",
    children: null
}, {
    File: "",
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
        Route: "tinymce",
        children: null
    }, {
        File: "components/drawer",
        Icon: "drawer",
        IsView: true,
        Name: "抽屉",
        OrderIndex: 0,
        Route: "drawer",
        children: null
    },  {
        File: "components/avatarUpload",
        Icon: "avatar",
        IsView: true,
        Name: "上传头像",
        OrderIndex: 0,
        Route: "avatar-upload",
        children: null
    }, {
        File: "",
        Icon: "form",
        IsView: true,
        Name: "表单",
        OrderIndex: 0,
        Route: "/components/form",
        children: [{
            File: "components/form/element",
            Icon: "element",
            IsView: true,
            Name: "表单元素",
            OrderIndex: 0,
            Route: "element",
            children: null
        }, {
            File: "components/form/group",
            Icon: "group",
            IsView: true,
            Name: "表单组合",
            OrderIndex: 0,
            Route: "group",
            children: null
        }]
    }]
}]


export default {
    getRouter: config => {
        console.log('config', config)
        // const { account } = JSON.parse(config.body)
        return routerMap
    },
}
