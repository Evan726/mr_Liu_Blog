<template>
    <el-container>
        <el-header height='50'>
			<layout-header></layout-header>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
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
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{LayoutHeader}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
