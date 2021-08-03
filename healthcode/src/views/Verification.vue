<template>
  <div id="login">
    <mt-header title="核检行程">
      <router-link slot="left" to="/"> 取消 </router-link>
    </mt-header>
    <div class="login">
      <div class="img-box"></div>
      <div class="box-login">
        <el-form
          ref="loginForm"
          :model="form"
          :rules="rules"
          label-width="40px"
          class="login-box"
        >
          <el-form-item label="" prop="phone">
            <el-input
              type="text"
              maxlength="11"
              suffix-icon="el-icon-mobile-phone"
              placeholder="手机号"
              v-model="form.phone"
            />
          </el-form-item>
          <el-form-item label="" prop="code">
            <div class="verify-wrapper">
              <el-input
                type="text"
                maxlength="6"
                suffix-icon="el-icon-lock"
                placeholder="验证码"
                v-model="form.code"
              />
              <el-button
                class="btn-orange"
                :disabled="disabled"
                @click="getCode"
                >{{ valiBtn }}</el-button
              >
            </div>
          </el-form-item>
          <el-form-item>
            <button class="d-btn-orange" @click.prevent="onSubmit('loginForm')">
              查询
            </button>
          </el-form-item>
        </el-form>
        <el-radio v-model="radio" label="1">同意并授权运营商查询本人在疫情期间14天内到访的省市信息。</el-radio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      const reg =
        /^0?(13[0-9]|15[012356789]|18[0-9]|14[578]|16[6]|17[035768]|19[19])[0-9]{8}$/;
      if (reg.test(value)) {
        return callback();
      }
      callback("请输入合法的手机号");
    };
    return {
      form: {
        phone: "",
        code: "",
        radio: '1'
      },
      autoLogin: false,
      rules: {
        phone: [{ validator: checkPhone, required: true, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      dialogVisible: false, // 对话框显示和隐藏
      valiBtn: "获取验证码",
      disabled: false,
    };
  },
  methods: {
    //获取验证码
    //获取验证码 并只验证手机号 是否正确
    getCode() {
      this.$refs["loginForm"].validateField("phone", (err) => {
        if (err) {
          console.log("未通过");
          return;
        } else {
          console.log("已通过");
          this.tackBtn(); //验证码倒数60秒
          let fd = new FormData(); //POST 请求需要 转化为Form
          fd.append("uphone", this.form.phone);
          fd.append("NeedCheck", 2);
          this.$axios({
            method: "POST",
            data: fd,
            url: "/api/sgsaccount/vcodeget",
          }).then((res) => {
            console.log(res);
          });
        }
      });
    },
    tackBtn() {
      //验证码倒数60秒
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.valiBtn = "获取验证码";
          this.disabled = false;
        } else {
          this.disabled = true;
          this.valiBtn = time + "秒后重试";
          time--;
        }
      }, 1000);
    },
    onSubmit(formName) {
      //点击登录 验证手机& 验证码是否符合条件
      this.$refs[formName].validate((valid) => {
        // 为表单绑定验证功能
        if (valid) {
          let fd = new FormData();
          fd.append("uphone", this.form.phone);
          fd.append("VCode", this.form.code);
          this.$axios({
            method: "POST",
            data: fd,
            url: `/api/sgsaccount/adminlogin`,
          }).then((res) => {
            console.log(res);
            if (res.data.EID == 0) {
              var token = res.data.Data[0].token;
              localStorage.setItem("token", token);
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
              });
              this.$router.push({ path: "/indexx" });
            } else {
              this.$message({
                showClose: true,
                message: res.data.Err,
                type: "warning",
              });
            }
          });
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
  },
};
</script>