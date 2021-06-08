<template>
  <div class="addinf">
    <!-- 顶部导航栏 -->
    <mt-header title="新冠疫苗接种详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 用户信息 -->
    <div class="baseinf">
      <p>用户信息</p>
      <span>用户:</span><span>叶*文</span><br />
      <span>证件号码:</span><span>100000**********1010</span>
    </div>
    <!-- 疫苗接种信息 -->
    <div class="baseinf">
      <p>疫苗接种信息</p>
      <span>疫苗名称:</span><span>新冠Vero(科兴中维)</span><br />
      <span>接种日期:</span><span>2021-04-03</span><br />
      <span>接种地点:</span><span>重庆市/北碚区</span>
    </div>
    <div class="baseinf">
      <p>疫苗接种信息</p>
      <span>疫苗名称:</span><span>新冠Vero(科兴中维)</span><br />
      <span>接种日期:</span><span>2021-05-05</span><br />
      <span>接种地点:</span><span>重庆市/北碚区</span>
    </div>
    <!-- 底部提示信息 -->
    <div class="floor">
      <p>上诉信息若与本人接种情况不符,请向接种单位反馈</p>
      <p>疫苗接种数据持续更新中</p>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: "微软雅黑";
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
  border-left: 2px solid purple;
  padding-left: 1em;
}
span {
  padding-left: 1em;
  line-height: 1.8em;
}
.floor{
    text-align: center;
    color: rgb(155, 155, 155);
    margin-top: 50px;
}.floor p{
    margin: 0;
}
</style>