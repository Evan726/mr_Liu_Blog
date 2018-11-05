<template>
    <div class="header_box flex">
        <div :class="isShow?'logo':'logos'">
            <img src="../../../assets/logo.png" :alt="logo_alt">
        </div>
            <div class="header_main">
                <el-row>
                    <el-col :span="16">
                        <ul class="flex head_icon_box">
                            <li @click="menuHandle" style="color: #000">
                                <svg-icon icon-class='menu'></svg-icon>
                            </li>
                            <li>
                                <svg-icon icon-class='refresh'></svg-icon>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="8">
                        <div class="flex user_info">
                            <ul class="flex head_icon_box">
                                <li class="flex">
                                    <span>评论</span>
                                    <el-badge class="mark" :value="12" />
                                </li>
                                <li @click="handleFullScreen">
                                    <el-tooltip effect="dark" :content="fullscreen ? `取消全屏`:`全屏`" placement="bottom">
                                        <svg-icon icon-class='full-screen'></svg-icon>
                                    </el-tooltip>
                                </li>
                                <li>
                                    <svg-icon icon-class='theme-color'></svg-icon>
                                </li>
                                <li>
                                    <el-dropdown @command="handleCommand">
                                        <span class="el-dropdown-link">
                                        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>基本信息</el-dropdown-item>
                                            <el-dropdown-item>修改密码</el-dropdown-item>
                                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </li>
                                <li @click="handleShowDrawer">
                                    <svg-icon icon-class='more'></svg-icon>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <drawer :visible="DrawerIsShow" @closeDrawer="handleCloseDrawer"  className='drawerClass' :close-on-click-modal="true"></drawer>
        </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Drawer from '@/components/Drawer'
export default {
    name: 'LayoutHeader',
    data() {
        return {
            logo_alt: '刘先生的博客',
            fullscreen: false, //是否全屏显示
            DrawerIsShow: false
        }
    },
    props: {
        isShow: {
            type: Boolean
        }
    },
    computed: {
        ...mapGetters([
            'name',
            'avatar',
        ])
    },
    components: {
        Drawer
    },
    methods: {
        //操作抽屉
        handleShowDrawer() {
            this.DrawerIsShow = true
        },
        handleCloseDrawer() {
            this.DrawerIsShow = false
        },
        //操作菜单的显示模式
        menuHandle() {
            this.$emit("call")
        },
        //菜单操作
        handleCommand(command) {
            if (command === 'logout') {
                this.$store.dispatch("logout").then((res) => {
                    this.$router.push({ path: '/login' })
                }).catch(error => {
                    console.log('error111', error)
                })
            }
        },
        //全屏显示  
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },

    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.drawerClass{
    /*width: 800px;*/
}
</style>
