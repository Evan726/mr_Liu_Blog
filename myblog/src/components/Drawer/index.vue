<template>
    <div @click='handleClose(closeOnClickModal)' class="drawer_box" v-show="visible">
        <transition :name="placement">
            <div v-if="visible" @click.stop :class="'drawer_model' +' '+ className" :style="Object.assign({},style[placement],{
        })">
            <div class="drawer_title">
                <h3>drawer名称</h3>
                <div @click='handleClose(true)'>
                    <svg-icon icon-class='close'></svg-icon>
                </div>
            </div>
            <div></div>   
            </div>
        </transition>
    </div>
</template>
<script>
/**
 * visible      : 是否显示drawer          boolean                          默认值：false
 * placement    : Darwer出现位置          top/right/left/bottom            默认值:right
 * width        : Darwer宽度（placement为left或right 有效）             Number                           默认值:400
 * height       : Darwer宽度 （placement为top或botoom 有效）               Number                           默认值:300
 * className    : Darwer  的自定义类名
 * close-on-click-modal   是否可以通过点击 modal 关闭 Darwer                                          默认值 true
 */
export default {
    name: 'Drawer',
    data() {
        return {
            style: {
                right: {
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: (this.placement === 'right' || this.placement === 'left') ? this.width + 'px' : '100%',
                },
                left: {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: (this.placement === 'right' || this.placement === 'left') ? this.width + 'px' : '100%',
                },
                top: {
                    left: 0,
                    top: 0,
                    right: 0,
                    height: (this.placement === 'top' || this.placement === 'bottom') ? this.height + 'px' : '100%',
                },
                bottom: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: (this.placement === 'top' || this.placement === 'bottom') ? this.height + 'px' : '100%',
                }
            }

        }
    },
    props: {
        visible: {
            type: Boolean
        },
        width: {
            type: String,
            default: '400'
        },
        height: {
            type: String,
            default: '300'
        },
        placement: {
            type: String,
            default: 'right'
        },
        className: {
            type: String,
        },
        'close-on-click-modal': {
            type: Boolean,
            default: true
        }
    },
    computed: {

    },
    methods: {
        handleClose(bool) {
            if (bool) {
                this.$emit("closeDrawer")
            }
        }
    }
}

</script>
<style scoped>
.drawer_box {
    position: absolute;
    z-index: 100000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: rgba(0, 0, 0, .3);
}

.drawer_model {
    background: #fff;
    position: absolute;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
    /*animation: myfirst 0.5s;*/
}

.drawer_title{
    height: 34px;
    padding: 4px 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    line-height: 34px;
}

.left-enter-active,
.top-enter-active,
.bottom-enter-active,
.right-enter-active {
    transition: all 0.5s;
}


.right-enter,
.right-leave-to {
    transform: translateX(300px);
    opacity: 0;
}
.left-enter,
.left-leave-to {
    transform: translateX(-300px);
    opacity: 0;
}
.top-enter,
.top-leave-to{
    transform: translateY(-300px);
    opacity: 0;
}
.bottom-enter,
.bottom-leave-to {
    transform: translateY(300px);
    opacity: 0;
}


</style>
