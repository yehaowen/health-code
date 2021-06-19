<template>
  <div class="homeLogin">
    <div class="user">
      <h2>欢迎使用XXX</h2>
      <div class="homeLogin">
        <!-- 身份卡片图 -->
        <div class="idCard">
          <img src="../assets/register.png" width="33%" />
          <p>请先登录账号</p>
        </div>
        <!-- 登录按钮 -->
        <div class="btn">
          <mt-button type="primary" size="large" @click.native="login">提交</mt-button>
        </div>
        <!-- 弹出层
        <van-cell is-link @click="showPopup"></van-cell>
        <van-popup v-model="show">内容</van-popup> -->
      </div>

      <div style="display: none" class="user-login" id="user-login"></div>
    </div>
  </div>
</template>

<style scoped>
/* 整体外边距 */
.homeLogin {
  margin: 10px;
}
/* 身份图居中 */
.idCard {
  text-align: center;
}
/* 按钮样式 */
.btn {
  margin-top: 30px;
}
.login_alert {
  /* width: 80%;
  height: 30%; */
  background-color: black;
  position: absolute;
}
.user {
  text-align: center;
  position: relative;
  border: 1px;
}
.user-login {
  margin: 0 auto;
  /* position: absolute; */
  /* background-color: red; */
}
</style>

<script>
// 引入弹出提示框
import { MessageBox } from "mint-ui";

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 弹出提示框内容
      title: "请先进行登录",
      message: "温馨提示",
      show: false,
      use_phone_num: "",
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    //点击登录后拉取个人信息

    login() {
      //弹出对话框
      MessageBox.prompt("请输入手机号").then(({ value, action }) => {
        // console.log(value,action)   //手机号  确认操作--confirm
        this.use_phone_num = value;
        var tel = /^[1]([3-9])[0-9]{9}$/;
        //把use_phone_num替换成输入的值
        if (tel.test(this.use_phone_num)) {
          //发送请求 发送手机号码
          this.axios
            .post("/sp", `uphone=${this.use_phone_num}`)
            .then((result) => {
               if(result.data.code==200){
                  //把服务端响应中保存的用户名和身份证号码,传给VueX
                  let userInfo = {
                    uphone : this.use_phone_num,
                    uname : result.data.result[0].urlname, 
                    uID_ : result.data.result[0].uID_
                  };
                  this.$store.commit('updateUserInfo',userInfo);
                  Toast('提交成功!');
                  //跳转页面到  Home-transfer
                  this.$router.push("/Hometransfer");
               }else{
                 //查询失败 提示重新输入
                 Toast("请输入您注册时使用的手机号码");
                 }
            });
        } else {
          //手机号码格式输入错误时
          Toast("手机号码格式错误,请重新填写");
        }
      });
    },
  },
};
</script>