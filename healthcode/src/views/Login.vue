<!-- views/Login.vue -->
<template>
  <div>
    <mt-header title="登录">
      <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/register" slot="right">
        注册
      </router-link>
    </mt-header>

    <!-- 表单 -->
    <mt-field type="text"
              label="用户名"
              v-model="username"
              :state="usernameState"
              @blur.native="checkUsername"
              placeholder="请输入用户名">
    </mt-field>
    <mt-field type="password"
              label="密码"
              v-model="pwd"
              :state="pwdState"
              placeholder="请输入密码">
    </mt-field>
    <mt-button @click="checkForm" type="primary" size="large">登录</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      usernameState: '',
      pwd: '',
      pwdState: ''
    }
  },
  methods: {
    /** 验证密码 */
    checkPwd(){
      let reg = /^\d{6}$/;
      if(reg.test(this.pwd)){
        this.pwdState = 'success'
        return true;
      }else{
        this.pwdState = 'error'
        return false;
      }
    },

    /** 验证账号 */
    checkUsername(){
      // 获取文本框的值  
      // 通过正则表达式，验证文本框的内容是否合法
      let reg = /^\w{6,15}$/;
      // 分支业务：如果合法(state:succes)如果不合法(state:error)
      if(reg.test(this.username)){
        this.usernameState = 'success'
        return true;
      }else{
        this.usernameState = 'error'
        return false;
      }
    },

    /** 点击确认按钮 验证表单 */
    checkForm(){
      // 验证用户名
      if(this.checkUsername() && this.checkPwd()){
        console.log('login...')
        // 发送请求，执行登录业务
        this.axios.post('/login', 
          `username=${this.username}&password=${this.pwd}`)
          .then(result=>{
          console.log(result)
          if(result.data.code==200){
            this.$toast({
              message: '登录成功',
              position: 'bottom',
              duration: 2000
            })
            // 访问vuex，更新登录状态   loginOK(xx)
            // 把服务端响应中保存的用户名，传给loginOK
            let username = result.data.result.username;
            this.$store.commit('loginOK', username);

            // 向sessionStorage中存储islogin与username
            sessionStorage.setItem('islogin','true');
            sessionStorage.setItem('username',username);

            // 跳转到主页
            this.$router.push('/')
          }else if(result.data.code==201){
            this.$toast({
              message: '账号密码不匹配，请重新输入',
              position: 'bottom',
              duration: 2000
            })
          }
        })
      }
    }
  }
}
</script>