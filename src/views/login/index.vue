<template>
<div class="login-container">
    <el-form class="login-from" ref="form" :model="user">
    <div class="login-logo"></div>
    <el-form-item>
        <el-input v-model="user.mobile"
        placeholder="请输入手机号">
        </el-input>
    </el-form-item>
    <el-form-item>
        <el-input v-model="user.code"
        placeholder="请输入验证码">
        </el-input>
    </el-form-item>
    <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
    <el-form-item>
    <el-button 
    class="login-btn" 
    type="primary" 
    :loading="loginloading" 
    @click="onlogin">
    登录
    </el-button>
    </el-form-item>
    </el-form>
</div>
    
</template>
<script>
import requset from '@/utils/request'

export default {
    name:'LoginIndex',
    filters:{},
    components: {},
    mixins:[],
    data() {
    return {
        user: {
          mobile:'',//手机号
          code:''//验证码
        },
        checked: false,//协议勾选状态
        loginloading: false //登录时按钮状态
    }
    },
    computed: {},
    watch: {},
    methods: {
        onlogin() {
        //获取表单数据（用户输入内容）
        const user = this.user
        //验证表单数据格式

        //请求登录
        this.loginloading = true

        requset({
            methods: 'POST',
            url: '/mp/v1_0/authorizations',//完整路径前半部分在BaseURL 封装的axios组件中（request.js）
            data: user //POST的请求体
            }).then(res => {
                console.log(res)
                //此时登录成功
              this.loginloading = false //关闭按钮loading状态
              this.$message({
                message: '恭喜您，登录成功！',
                type: 'success'
              });   
            }).catch(err =>{
                console.log('登录失败',err);
                //此时登录失败
                this.loginloading = false //关闭按钮loading状态
                this.$message.error('额哦，手机号或验证码不对哦！');
            })
        //处理服务器响应

      }
    },
    beforeCreate() {},
    created() {
    },
    beforeMount() {},
    mounted() {
    },
    beforeUpdate() {},
    updated() {}, 
    beforeDestroy() {},
    destroyed() {},
    activated() {}
    
}
</script>
<style lang='less' scoped>
.login-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('login-bg.jpg') no-repeat;
    background-size: cover;
}

.login-from {
    background-color:transparent;
    opacity: .8;
    padding: 30px;
    min-width: 230px;
}

.login-btn {
    width: 100%;
}

.login-logo {
    width: 100%;
    height: 160px;
    margin: auto;
    background:url('login-logo.jpg') no-repeat;
    background-size: contain;
}
</style>