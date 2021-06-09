<template>
  <div class="homeLogin">
    <!-- 身份卡片图 -->
    <div class="idCard">
      <img src="../assets/home_img/idCard.png">
    </div>
    <!-- 登录按钮 -->
    <div class="btn">
      <mt-button type="primary" 
      size="large"
      @click.native="login"
      >登录</mt-button>
    </div>
       
       <!--  -->
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<style scoped>
/* 整体外边距 */
.homeLogin{
  margin: 10px;
}
/* 身份图居中 */
.idCard{ text-align: center; }
/* 按钮样式 */
.btn{ margin-top: 30px; }
.login_alert{ 
  /* width: 80%;
  height: 30%; */
  background-color: black;
  position: absolute;
  
  }
</style>

<script>
// 引入弹出提示框
import { MessageBox } from 'mint-ui';

export default {
  data() {
    return {
      // 弹出提示框内容
      title: '请先进行登录',
      message: '温馨提示',
      show: false,
      
    }
  },
 
  methods: {
    showPopup() {
      this.show = true;
    },
    //点击登录后拉取个人信息
    login(){
      //弹出对话框
      
    }
  },

  mounted() {
    
    //第一次登入 弹出 "温馨提示"
    MessageBox.alert( this.title, this.message );
    // this.axios.get("/category").then((result) => {
    // });
  },
}
</script>
