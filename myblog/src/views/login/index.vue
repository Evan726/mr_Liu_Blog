<template>
    <div class="login_container" v-loading="loading" element-loading-text="拼命加载中..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.4)">
        <div class="login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-width="labelWidth">
                <el-form-item prop="account">
                    <el-input placeholder="用户名" v-model="ruleForm.account">
                        <template slot="prepend"><i class="el-icon-menu"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="密码" v-model="ruleForm.password">
                        <template slot="prepend"><i class="el-icon-menu"></i></template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            loading: false,
            labelWidth: "0px",
            ruleForm: {
                account: "admin",
                password: "1234"
            },
            rules: {
                account: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                this.loading = true
                if (valid) {
                    this.LoginByUsername(this.ruleForm).then(() => {
                        this.loading = false
                        this.$router.push({ path: '/' })
                    }).catch((error) => {
                        console.log('error', error)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        ...mapActions([
            'LoginByUsername',
        ])
    }
}

</script>
<style lang="less">
</style>
