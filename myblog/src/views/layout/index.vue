<template>
    <el-container>
        <el-header height='50'>
            <layout-header @call="sideCall"></layout-header>
        </el-header>
        <el-container>
            <el-aside :width="sideWidth+'px'">
                <layout-side :isCollapse="sideWidth!==200"></layout-side>
            </el-aside>
            <el-main>
                <div class="bread">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import LayoutHeader from "./components/LayoutHeader.vue"
import LayoutSide from "./components/LayoutSide.vue"
export default {
    data() {
        return {
            sideWidth: 200,
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: { LayoutHeader, LayoutSide },
    methods: {
        sideCall() {
            if (this.sideWidth === 200) {
                this.sideWidth = 65
            } else {
                this.sideWidth = 200
            }
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
