<template>
  <div>
    <div class="top">
      <h3 class="title">我的渝康码</h3>
      <h3 class="name">{{ this.hname }}</h3>
      <h3 class="link">关于渝康码<span>|</span>渝康码管理</h3>
      <!-- 二维码图 -->
      <div class="qrcode">
        <iframe
          :src="reportUrl"
          frameborder="0"
          style="width: 100%; height: 100%"
          id="iframeBox"
          class="iframe"
        ></iframe>
        <img src="../assets/yimiao.png" alt="" class="img" />
      </div>
      <div class="num">
        <span>{{ arr[0] }}</span> <span>{{ arr[1] }}</span>
      </div>
    </div>
    <div class="mid">
      <span class="update">更新于：{{ Time }}</span>
      <span class="submit">
        立即上报 <a> <img class="back" src="../assets/leftback.png" alt="" /></a
      ></span>
    </div>
    <div class="bottom">
      <div class="bm1 clearfix">
        <span class="bm1-1"> <strong>最新健康自查</strong> </span>
        <span class="bm1-2"> <strong>无异常</strong> </span>
      </div>
      <div class="bm2">
        <div class="bm2-1">
          <img src="../assets/gps.png" alt="" /><span> 行程信息</span
          ><button class="btn-t">核验行程</button>
        </div>
        <h6>14天内未到访到过中高风险地区所在城市</h6>
      </div>
      <div class="bm3">
        <img src="../assets/zhen.png" alt="" />
        <span
          >已接种新冠疫苗2剂（共2剂）<a
            ><img class="back" src="../assets/rightback.png" alt="" /></a
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // 二维码链接
      reportUrl: "/qrcode.html",
      time: "",
      Time: "",
      arr: ["1000", "2000"],
    };
  },
  mounted() {
    this.time = new Date();
    let y = this.time.getYear() - 100;
    let m = this.time.getMonth() + 1;
    let d = this.time.getDate();
    let h = this.time.getHours();
    let M = this.time.getMinutes();
    let s = this.time.getSeconds();
    this.Time = `20${y}/${m}/${d} ${h}:${M}:${s}`;
  },
  computed: {
    ...mapState(["hname", "hID_", "hphone"]),
  },
  created() {
    let ss = window.sessionStorage;
    let hphone = this.hphone;
    ss.setItem("hphone", hphone);
  },
};
</script>

<style scoped>
* {
  font-family: "微软雅黑";
  vertical-align: middle;
}
.qrcode {
  position: relative;
  margin: 0 auto;
  border: 10px solid #ffc400;
  box-shadow: 0px 0px 10px #ffc400;
  border-radius: 10px;
  width: 184px;
  height: 184px;
  text-align: center;
  /* overflow: hidden; */
}
.img {
  position: absolute;
  width: 50px;
  top: -30px;
  left: -30px;
}
.iframe {
  position: absolute;
  top: 2px;
  left: 2px;
}
.num {
  text-align: center;
  margin: 5px auto;
  font-size: 1.5em;
  color: rgb(255, 255, 255);
}
h3 {
  text-align: center;
}
.top {
  color: #fefefe;
  border-top: 1px solid transparent;
  height: 67.09vh;
  background-image: linear-gradient(to right, rgb(24, 120, 255) , rgb(87, 157, 255));
  /* background-color: rgb(64, 133, 232); */
  border-bottom: 2px solid rgb(80, 150, 234);
}
.mid {
  color: #fefefe;
  height: 6vh;
  background-color: rgb(64, 133, 232);
}
.mid span {
  line-height: 6vh;
}
.bottom {
  height: 26.91px;
  background-color: rgb(255, 255, 255);
}
.btn-t {
  background-color: #387fe6;
  outline: none;
  color: rgb(250, 250, 250);
  border: none;
  border-radius: 0.5vh;
  float: right;
  margin-right: 5.4vw;
  width: 18.9vw;
  height: 40px;
  margin-top: 3vh;
}
.clearfix::after {
  content: "\200B";
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
  *zoom: 1;
}
.bottom img {
  width: 7.6vw;
}

.title {
  color: #fff;
  font-size: 1.5em;
  margin-top: 4.8vh;
}
.name {
  font-size: 1.75em;
  margin-top: 2vh;
  margin-bottom: 2.63vh;
}
.link span {
  margin-left: 3.33vw;
  margin-right: 3.33vw;
}
.update {
  float: left;
  margin-left: 5.6vw;
}
.submit {
  float: right;
  margin-right: 5.6vw;
}
.bm1 {
  color: #000;
  margin-top: 3.97vh;
}
.bm1-1 {
  float: left;
  margin-left: 5.4vw;
}
.bm1-2 {
  float: right;
  margin-right: 5.4vw;
}
.bm2 img {
  margin-left: 5.4vw;
  margin-right: 2vw;
}
.bm2-1 {
  margin-top: 2vh;
  line-height: 5vh;
  height: 5vh;
}
h6 {
  color: #666;
  margin-top: 0.5vh;
  margin-left: 13.4vw;
}
.bm3 {
  height: 11vh;
  line-height: 11vh;
}
.bm3 img {
  margin-left: 5.4vw;
  margin-right: 2vw;
}
.bm3 .back {
  margin-top: 2vh;
  margin-left: 40vw;
  height: 30px;
  width: 30px;
}
.submit .back {
  float: right;
  margin-right: -2.6vw;
  margin-top: 1.15vh;
  margin-left: 3vw;
  height: 3.2vh;
}
</style>