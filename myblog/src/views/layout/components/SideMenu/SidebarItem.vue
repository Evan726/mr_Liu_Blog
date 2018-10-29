<template>
    <div>
        <template v-for="(item,index) in data">
            <template v-if="item.children.length>0">
                <el-submenu :index="item.path">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.Name}}</span>
                    </template>
                    <template v-for="child in item.children">
                        <sidebar-item :data="[child]" v-if="child.children.length>0"></sidebar-item>
                        <router-link v-else :to="child.path">
                            <el-menu-item :index="child.path">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{child.Name}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <router-link :to="item.path">
                    <el-menu-item :index="item.path">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.Name}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </template>
    </div>
</template>
<script>
export default {
    name: 'SidebarItem',
    data() {
        return {
        }
    },
    props: {
        data: {
            type: Array
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
