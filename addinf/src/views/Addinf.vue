<template>
  <div class="addinf">
    <!-- 顶部导航栏 -->
    <mt-header title="上报我的健康信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 基本信息 -->
    <h3>基本信息</h3>
    <!-- 只读项 -->
    <div class="baseinf">
      <p>姓名</p>
      <mt-field type="text" placeholder="用户名" readonly></mt-field>
    </div>
    <div class="baseinf">
      <p>手机号码</p>
      <mt-field type="text" placeholder="131****0000" readonly></mt-field>
    </div>
    <div class="baseinf">
      <p>证件类型</p>
      <mt-field type="text" placeholder="身份证" readonly></mt-field>
    </div>
    <div class="baseinf">
      <p>证件号码</p>
      <mt-field type="text" placeholder="1001*********0000" readonly></mt-field>
    </div>
    <div class="baseinf">
      <p>性别</p>
      <mt-field type="text" placeholder="男" readonly></mt-field>
    </div>
    <div class="baseinf">
      <p>出生日期</p>
      <mt-field type="text" placeholder="2021-06-07" readonly></mt-field>
    </div>
    <!-- 可修改项 -->
    <div class="baseinf">
      <p>国籍/地区</p>
      <mt-field type="text" placeholder="国籍/地区" value="中国大陆"></mt-field>
    </div>
    <div class="baseinf">
      <p>户籍所在地</p>
      <mt-field
        type="text"
        placeholder="户籍所在地"
        value="户籍所在地"
      ></mt-field>
    </div>
    <div class="baseinf">
      <p>籍贯</p>
      <mt-field type="text" placeholder="籍贯" value="籍贯"></mt-field>
    </div>
    <div class="baseinf">
      <p>居住省/市</p>
      <mt-field
        type="text"
        placeholder="居住省/市"
        value="居住省/市"
      ></mt-field>
    </div>
    <div class="baseinf">
      <p>居住地址</p>
      <mt-field type="text" placeholder="居住地址" value="居住地址"></mt-field>
    </div>
    <div class="baseinf">
      <p>详细住址</p>
      <mt-field type="text" placeholder="详细住址" value="详细住址"></mt-field>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
}
body {
  box-sizing: border-box;
}
.addinf >>> .mint-header {
  background-color: unset;
  color: black;
}
.baseinf {
  margin: 0 10px;
  padding: 2vh 0;
  border-bottom: 1px solid #eee;
}
.baseinf p {
  font-size: 14px;
}
.baseinf >>> .mint-cell-wrapper,
.mint-cell:last-child {
  background-image: none;
  padding: 0;
}
.baseinf >>> .mint-cell {
  min-height: 0;
}
.baseinf >>> .mint-field-core {
  line-height: 0;
  padding: 0;
}
</style>