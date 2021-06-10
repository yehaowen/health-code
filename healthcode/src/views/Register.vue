<!-- views/Register.vue -->
<template>
  <div>
    <mt-header title="用手机号注册">
      <router-link slot="left" to="/"> 取消 </router-link>
    </mt-header>

    <!-- 表单 -->
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <mt-field
      type="text"
      label="昵称"
      v-model="username"
      :state="usernameState"
      @blur.native="checkUsername"
      placeholder="例如：周梓涵"
    >
    </mt-field>
    <el-select v-model="value" placeholder="国家/地区">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <mt-field
      type="number"
      label="+86"
      v-model="uphone"
      :state="uphoneState"
      placeholder="请填写手机号码"
    >
    </mt-field>
    <mt-field
      type="password"
      label="密码"
      v-model="pwd"
      :state="pwdState"
      placeholder="请设置密码"
    >
    </mt-field>
     <el-radio v-model="radio" label="1">我已阅读并同意<a href="#">《软件许可及服务协议》</a></el-radio>
    <mt-button @click="checkForm" type="primary" size="large">注册</mt-button>
  </div>
</template>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<script>
export default {
  data() {
    return {
      username: "",
      usernameState: "",
      pwd: "",
      pwdState: "",
      repwd: "",
      repwdState: "",
      imageUrl: "",
      uphone: "",
      radio: '1'
    };
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "中国大陆",
        },
        {
          value: "选项2",
          label: "中国香港",
        },
        {
          value: "选项3",
          label: "中国澳门",
        },
        {
          value: "选项4",
          label: "中国台湾",
        },
        {
          value: "选项5",
          label: "俄罗斯",
        },
        {
          value: "选项6",
          label: "美国",
        },
        {
          value: "选项7",
          label: "英国",
        },
        {
          value: "选项8",
          label: "法国",
        },
        {
          value: "选项9",
          label: "印度",
        },
        {
          value: "选项10",
          label: "巴基斯坦",
        },
        {
          value: "选项11",
          label: "日本",
        },
        {
          value: "选项11",
          label: "韩国",
        },
        {
          value: "选项12",
          label: "朝鲜",
        },
        {
          value: "选项13",
          label: "巴勒斯坦",
        },
        {
          value: "选项14",
          label: "以色列",
        },
      ],
      value: "",
    };
  },
  methods: {
    /** 验证密码 */
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        this.pwdState = "success";
        return true;
      } else {
        this.pwdState = "error";
        return false;
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    checkRepwd() {
      let reg = /^\d{6}$/;
      if (this.pwd == this.repwd && reg.test(this.repwd)) {
        this.repwdState = "success";
        return true;
      } else {
        this.repwdState = "error";
        return false;
      }
    },

    /** 验证账号 */
    checkUsername() {
      // 获取文本框的值
      // 通过正则表达式，验证文本框的内容是否合法
      let reg = /^\w{6,15}$/;
      // 分支业务：如果合法(state:succes)如果不合法(state:error)
      if (reg.test(this.username)) {
        this.usernameState = "success";
        return true;
      } else {
        this.usernameState = "error";
        return false;
      }
    },
    /** 验证手机号 */
    checkUphone() {
      // 获取文本框的值
      // 通过正则表达式，验证文本框的内容是否合法
      let reg = /^1[3-9]\d{9}$/;
      // 分支业务：如果合法(state:succes)如果不合法(state:error)
      if (reg.test(this.uphone)) {
        this.uphoneState = "success";
        return true;
      } else {
        this.uphoneState = "error";
        return false;
      }
    },

    /** 点击确认按钮 验证表单 */
    checkForm() {
      // 验证用户名
      if (this.checkUsername() && this.checkPwd() && this.checkRepwd() && this.checkUphone()) {
        console.log("regist...");
        // 发送http请求，执行注册业务
        this.axios
          .post("/register", `username=${this.username}&password=${this.pwd}&uphone=${this.uphone}`)
          .then((result) => {
            console.log(result);
            if (result.data.code == 200) {
              // 成功
              this.$toast({
                message: "恭喜，注册成功",
                position: "bottom",
                duration: 3000,
              });
              // 跳转到登录
              this.$router.push("/login");
            } else if (result.data.code == 201) {
              // 失败
              this.$toast({
                message: "该用户已经注册",
                position: "bottom",
                duration: 3000,
              });
            }
          });
      }
    },
  },
};
</script>
