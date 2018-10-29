<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#20222A" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false" :style="{height: clientHeight + 'px'}" :router="true">
        <sidebar-item :data="routers"></sidebar-item>
    </el-menu>
</template>
<script>
import SidebarItem from "./SideMenu/SidebarItem.vue"
export default {
    name: "LayoutSide",
    data() {
        return {
        }
    },
    props: {
        isCollapse: {
            type: Boolean
        },
        clientHeight: {
            type: Number
        }
    },
    components: {
        SidebarItem,
    },
    computed: {
        routers() {
            return this.$store.getters.menuData
            // return [{
            //         path: "/home",
            //         Name: "首页",
            //         children: []
            //     },
            //     {
            //         path: "/icon",
            //         Name: "Icon",
            //         children: []
            //     }, {
            //         path: "",
            //         Name: "组件",
            //         children: [{
            //             path: "/components/tinymce",
            //             Name: "编辑器",
            //             children: []
            //         }, {
            //             path: "/components/avatar-upload",
            //             Name: "上传头像",
            //             children: []
            //         }]
            //     }
            // ]
        }
    },
    mounted() {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }

}

</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
}

</style>
