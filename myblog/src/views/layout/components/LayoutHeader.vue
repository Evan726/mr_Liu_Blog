<template>
    <div class="header_box flex">
        <div class="logo">
            logo
        </div>
        <div class="header_main">
            <el-row>
                <el-col :span="16">
                    <ul class="flex head_icon_box">
                        <li @click="menuHandle"><i class="el-icon-menu"></i></li>
                        <li><i class="el-icon-refresh"></i></li>
                    </ul>
                </el-col>
                <el-col :span="8">
                    <div class="flex user_info">
                        <ul class="flex head_icon_box">
                            <li class="flex">
                                    <span>评论</span>
                                    <el-badge class="mark" :value="12" />
                            </li>
                            <li><i class="el-icon-menu"></i></li>
                            <li><i class="el-icon-menu"></i></li>
                            <li><i class="el-icon-menu"></i></li>
                            <li>
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>基本信息</el-dropdown-item>
                                        <el-dropdown-item>修改密码</el-dropdown-item>
                                        <el-dropdown-item>退出</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LayoutHeader',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        ...mapGetters([
            'name',
            'avatar',
        ])
    },
    methods: {
        menuHandle() {
            this.$emit("call")
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
