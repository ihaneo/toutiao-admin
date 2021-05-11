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
    <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
    </el-form>
</div>
    
</template>
<script>
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
        checked: false
    }
    },
    computed: {},
    watch: {},
    methods: {
        onSubmit() {
        console.log('submit!');
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
    background-color: #ccc;
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