<!-- views/Register.vue -->
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
    <div class="user-info">
                <img :src="avatar" class="user-info-avatar">
            </div>
    <mt-field type="number"
              label="手机号"
              v-model="uphone"
              :state="uphoneState"
              @blur.native="checkUphone"
              placeholder="请输入手机号">
    </mt-field>
    <mt-field type="password"
              label="密码"
              v-model="pwd"
              :state="pwdState"
              placeholder="请输入密码">
    </mt-field>
    <mt-field type="number"
              label="身份证号"
              v-model="uidnumber"
              :state="uidnumberState"
              placeholder="请输入身份证号">
    </mt-field>
    <a href="#">用短信验证码登录</a>
    <mt-button @click="checkForm" type="primary" size="large">登录</mt-button>
    <el-footer><a href="#">找回密码</a> | <a href="#">紧急冻结</a> | <a href="#">更多选项</a></el-footer>
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
      uidnumberState: ''
    }
  },
  mounted(){
    this.avatar = 
      require('../assets/avatar/'+this.avatar)
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
    /** 验证手机号 */
    checkUphone(){
      // 获取文本框的值  
      // 通过正则表达式，验证文本框的内容是否合法
      let reg = /^1[3-9]\d{9}$/;
      // 分支业务：如果合法(state:succes)如果不合法(state:error)
      if(reg.test(this.uphone)){
        this.uphoneState = 'success'
        return true;
      }else{
        this.uphoneState = 'error'
        return false;
      }
    },
    /** 点击确认按钮 验证表单 */
    checkForm(){
      // 验证用户名
      if(this.checkUphone() && this.checkPwd()){
        console.log('login...')
        // 发送请求，执行登录业务
        this.axios.post('/login', 
          `uphone=${this.uphone}&password=${this.pwd}&uidnumber=${this.uidnumber}`)
          .then(result=>{
          console.log(result)
          if(result.data.code==200){
            this.$toast({
              message: '登录成功',
              position: 'bottom',
              duration: 2000
            })
            // 访问vuex，更新登录状态   loginOK(xx)
            // 把服务端响应中保存的手机号码，传给loginOK
            let username = result.data.result.uphone;
            this.$store.commit('loginOK', uphone);
            // 向sessionStorage中存储islogin与uphone
            sessionStorage.setItem('islogin','true');
            sessionStorage.setItem('uphone',uphone);
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