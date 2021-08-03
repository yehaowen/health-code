<!-- views/Register.vue -->
<template>
  <div>
    <mt-header title="注册">
      <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right">
        登录
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
    <mt-field type="password"
              label="确认密码"
              v-model="repwd"
              :state="repwdState"
              placeholder="请输入确认密码">
    </mt-field>
    <mt-button @click="checkForm" type="primary" size="large">快速注册</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      usernameState: '',
      pwd: '',
      pwdState: '',
      repwd: '',
      repwdState: ''
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

    checkRepwd(){
      let reg = /^\d{6}$/;
      if((this.pwd==this.repwd) &&  reg.test(this.repwd)){
        this.repwdState = 'success'
        return true;
      }else{
        this.repwdState = 'error'
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
      if(this.checkUsername() && this.checkPwd() &&
            this.checkRepwd()){
        console.log('regist...')
        // 发送http请求，执行注册业务
        this.axios.post('/register',
          `username=${this.username}&password=${this.pwd}`)
          .then(result=>{
            console.log(result)
            if(result.data.code==200){  // 成功
              this.$toast({
                message: '恭喜，注册成功',
                position: 'bottom',
                duration: 3000
              });
              // 跳转到登录
              this.$router.push('/login');
            }else if(result.data.code==201){  // 失败
              this.$toast({
                message: '该用户已经注册',
                position: 'bottom',
                duration: 3000
              });  
            }
        })
      }
    }
  }
}
</script>
