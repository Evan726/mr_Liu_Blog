<template>
    <ul :class="isShow ? 'el-menu--collapse':''">
        <template v-for="(item,index) in data" v-if="item.children.length>0">
            <el-submenu :index="item.path">
                <template slot="title">
                    <svg-icon :icon-class='item.Icon'></svg-icon>
                    <span slot="title">{{item.Name}}</span>
                </template>
                <template v-for="child in item.children">
                    <sidebar-item :data="[child]" v-if="child.children.length>0"></sidebar-item>
                    <el-menu-item v-else :index="child.path">
                        <svg-icon :icon-class='child.Icon'></svg-icon>
                        <span slot="title">{{child.Name}}</span>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :to="item.path" :index="item.path">
                <svg-icon :icon-class='item.Icon'></svg-icon>
                <span slot="title">{{item.Name}}</span>
            </el-menu-item>
        </template>
    </ul>
</template>
<script>
export default {
    name: 'SidebarItem',
    data() {
        return {}
    },
    props: {
        data: {
            type: Array
        },
        isShow:{
            type:Boolean
        }
    },
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
