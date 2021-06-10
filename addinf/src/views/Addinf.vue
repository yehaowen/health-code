<template>
  <div class="addinf">
    <!-- 顶部导航栏 -->
    <mt-header title="上报我的健康信息">
      <router-link to="/" slot="left"
        ><mt-button icon="back"></mt-button
      ></router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 基本信息 -->
    <div>
      <h3>基本信息</h3>
      <!-- 只读项 -->
      <div class="baseinf">
        <p>姓名</p>
        <mt-field
          type="text"
          v-model="field__user__items.hname"
          readonly
          disableClear
        ></mt-field>
      </div>
      <div class="baseinf">
        <p>手机号码</p>
        <mt-field
          type="text"
          v-model="field__user__items.hphone"
          readonly
          disableClear
        ></mt-field>
      </div>
      <div class="baseinf">
        <p>证件类型</p>
        <mt-field
          type="text"
          v-model="field__user__items.hIDtype"
          readonly
          disableClear
        ></mt-field>
      </div>
      <div class="baseinf">
        <p>证件号码</p>
        <mt-field
          type="text"
          v-model="field__user__items.hID_"
          readonly
          disableClear
        ></mt-field>
      </div>
      <div class="baseinf">
        <p>性别</p>
        <mt-field
          type="text"
          v-model="field__user__items.hsex"
          readonly
          disableClear
        ></mt-field>
      </div>
      <div class="baseinf">
        <p>出生日期</p>
        <mt-field
          type="text"
          v-model="field__user__items.hbirthday"
          readonly
          disableClear
        ></mt-field>
      </div>
      <!-- 可修改项 -->
      <div class="baseinf">
        <p>国籍/地区</p>
        <mt-field type="text" v-model="field__user__items.hcountry"></mt-field>
      </div>
      <div class="baseinf">
        <p>户籍所在地</p>
        <mt-field type="text" v-model="field__user__items.hdr"></mt-field>
      </div>
      <div class="baseinf">
        <p>籍贯</p>
        <mt-field type="text" v-model="field__user__items.hnp"></mt-field>
      </div>
      <div class="baseinf">
        <p>居住省/市</p>
        <mt-field type="text" v-model="field__user__items.hpr"></mt-field>
      </div>
      <div class="baseinf">
        <p>居住地址</p>
        <mt-field type="text" v-model="field__user__items.hra"></mt-field>
      </div>
      <div class="baseinf">
        <p>详细住址</p>
        <mt-field type="text" v-model="field__user__items.hda"></mt-field>
      </div>
    </div>

    <!-- 单选框 -->
    <div class="otherinf">
      <h3>是否常住{{ city }}</h3>
      <mt-radio
        v-model="radio__often__items.value"
        :options="radio__often__items.options"
      >
      </mt-radio>
    </div>
    <div class="otherinf">
      <h3>近期是否在{{ city }}</h3>
      <mt-radio
        v-model="radio__recent__items.value"
        :options="radio__recent__items.options"
      >
      </mt-radio>
    </div>
    <!-- 特殊选框 -->
    <!-- label: "来或返回重庆不超过14日(含14日)", value: "3" -->
    <div class="otherinf" v-if="radio__recent__items.value == 3">
      <p>来或返回{{ city }}日期</p>
      <mt-field
        type="text"
        placeholder="详细日期"
        :value="
          datetime__old__items.year +
          '-' +
          datetime__old__items.month +
          '-' +
          datetime__old__items.date
        "
        ><a @click="openPicker__old" style="color: #0066ff">选择</a></mt-field
      >
      <mt-datetime-picker
        ref="picker__old"
        v-model="datetime__old__items.pickerValue"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        :end-date="new Date()"
        @confirm="handleConfirm__old"
      >
      </mt-datetime-picker>
    </div>

    <!-- label: "目前仍在外地", value: "4" -->
    <div v-else-if="radio__recent__items.value == 4">
      <div class="otherinf">
        <p>目前所在地</p>
        <mt-field type="text" placeholder="请选择目前所在地点" :value="cityType"
          ><a @click="opencityType" style="color: #0066ff">选择</a></mt-field
        >
        <mt-popup
          v-model="popupVisible"
          popup-transition="popup-fade"
          closeOnClickModal="true"
          position="bottom"
        >
          <mt-picker :slots="popupSlots" @change="onValuesChange" showToolbar>
            <div class="picker-toolbar-title">
              <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">
                取消
              </div>
              <div class="usi-btn-sure" @click="popupOk()">确定</div>
            </div>
          </mt-picker>
        </mt-popup>
      </div>
      <div class="otherinf">
        <p>拟返回{{ city }}日期</p>
        <mt-field
          type="text"
          placeholder="请选择日期"
          :value="
            datetime__new__items.year +
            '-' +
            datetime__new__items.month +
            '-' +
            datetime__new__items.date
          "
          ><a @click="openPicker__new" style="color: #0066ff">选择</a></mt-field
        >
        <mt-datetime-picker
          ref="picker__new"
          v-model="datetime__new__items.pickerValue"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleConfirm__new"
        >
        </mt-datetime-picker>
      </div>
    </div>

    <!-- label: "来或返回重庆超过14日", value: "2" -->
    <div class="otherinf" v-if="radio__recent__items.value != 1">
      <h3>近一个月旅居史</h3>
      <mt-checklist
        v-model="checklist__travel__items.value"
        :options="checklist__travel__items.options"
      >
      </mt-checklist>
    </div>

    <!-- 选填项 -->
    <div class="otherinf">
      <h3>近期接触史(选填)</h3>
      <p>自我感觉14日内曾与患者接触过或</p>
      <p>近期与确诊患者有接触.如乘搭同一公共交通工具等情况</p>
      <mt-switch v-model="switch__item"></mt-switch>
    </div>

    <!-- 必填项 -->
    <div class="symptominf">
      <h3>是否有如下症状(必选)</h3>
      <van-checkbox-group
        v-model="checkbox__symptom__items__value"
        checked-color="#26a2ff"
      >
        <van-checkbox name="1" @click="symptom1">自觉正常</van-checkbox>
        <van-checkbox name="2" @click="symptom2">发热37.3℃以下</van-checkbox>
        <van-checkbox name="3" @click="symptom3"
          >发热37.3℃(含)以上</van-checkbox
        >
        <van-checkbox name="4" @click="symptom4">干咳</van-checkbox>
        <van-checkbox name="5" @click="symptom4">乏力</van-checkbox>
        <van-checkbox name="6" @click="symptom4">其他症状</van-checkbox>
      </van-checkbox-group>
      <div>
        <p>其他症状</p>
        <mt-field
          type="text"
          placeholder="请简要描述症状情况(不超过10个汉字)"
          value=""
          readonly
        ></mt-field>
      </div>
    </div>

    <!-- 阅读确认通知 -->
    <div style="text-align: center" class="floot">
      <mt-checklist
        v-model="checklist__end__items.value"
        :options="checklist__end__items.options"
      >
      </mt-checklist>
      <mt-button type="primary" size="large" :disabled="agree" @click="check"
        >提交</mt-button
      >
      <p>所有公民信息仅用于疫情防控需要,数据不作他用</p>
      <a style="color: blue">用户服务协议</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 城市名
      city: "重庆",
      // 基本信息
      field__user__items: {
        // 只读项
        hname: "",
        hphone: "",
        hIDtype: "",
        hID_: "",
        hsex: "",
        hbirthday: "",
        // 可修改项
        hcountry: "",
        hdr: "",
        hnp: "",
        hpr: "",
        hra: "",
        hda: "",
      },
      // 单选框 是否常住重庆
      radio__often__items: {
        value: "1",
        options: [
          { label: "是,在重庆居住了已有半年以上", value: "1" },
          { label: "否,我是临时来重庆的", value: "2" },
        ],
      },
      // 单选框 近期是否在重庆
      radio__recent__items: {
        value: "1",
        options: [
          { label: "一直在重庆3个月或以上", value: "1" },
          { label: "来或返回重庆超过14日", value: "2" },
          { label: "来或返回重庆不超过14日(含14日)", value: "3" },
          { label: "目前仍在外地", value: "4" },
        ],
      },
      // 来返日期
      datetime__old__items: {
        pickerValue: "",
        year: "2021",
        month: "01",
        date: "01",
        startDate: "",
      },
      /* 目前所在地 */
      cityType: "", //当前所在地
      cityTypeVal: "", //当前问题类型-改变后的
      popupVisible: false, //问题类型弹框
      popupSlots: [
        //问题类型弹框数据
        {
          values: ["北京", "天津", "上海", "重庆"],
        },
      ],
      // 拟返回日期
      datetime__new__items: {
        pickerValue: "",
        year: "2021",
        month: "01",
        date: "01",
        startDate: "",
      },
      // 多选框 近一个月旅居史
      checklist__travel__items: {
        value: [],
        options: [
          { label: "中国大陆其他省(自治区)市", value: "1" },
          { label: "中国港澳台地区", value: "2" },
          { label: "国外", value: "3" },
        ],
      },
      // 近期接触史
      switch__item: false,
      checkbox__symptom__items__value: [],
      // 阅读确认通知
      checklist__end__items: {
        value: [],
        options: [
          {
            label: "我已阅知本申报所列事项,并保证以上申报内容正确属实",
            value: "1",
          },
        ],
      },
    };
  },
  methods: {
    // label: "来或返回重庆不超过14日(含14日)", value: "3"
    openPicker__old() {
      this.$refs.picker__old.open();
    },
    handleConfirm__old(value) {
      this.datetime__old__items.year = value.getFullYear();
      this.datetime__old__items.month = value.getMonth() + 1;
      this.datetime__old__items.date = value.getDate();
    },
    // label: "目前仍在外地", value: "4"
    // 时间选择框
    openPicker__new() {
      this.$refs.picker__new.open();
    },
    handleConfirm__new(value) {
      this.datetime__new__items.year = value.getFullYear();
      this.datetime__new__items.month = value.getMonth() + 1;
      this.datetime__new__items.date = value.getDate();
    },
    // label: "目前仍在外地", value: "4"
    // 所在地选择框
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    // 打开城市弹框
    opencityType() {
      this.popupVisible = true;
    },
    // 类型弹框点击确认
    popupOk() {
      this.cityType = this.cityTypeVal;
      this.popupVisible = false;
    },
    //弹框picker值发生改变
    onValuesChange(picker, values) {
      this.cityTypeVal = values[0];
    },
    // 症状检查
    // 有1 不能有23456
    symptom1() {
      var item1 = this.checkbox__symptom__items__value.indexOf("1");
      if (item1 > -1) {
        var item2 = this.checkbox__symptom__items__value.indexOf("2");
        if (item2 > -1) {
          this.checkbox__symptom__items__value.splice(item2, 1);
        }
        var item3 = this.checkbox__symptom__items__value.indexOf("3");
        if (item3 > -1) {
          this.checkbox__symptom__items__value.splice(item3, 1);
        }
        var item4 = this.checkbox__symptom__items__value.indexOf("4");
        if (item4 > -1) {
          this.checkbox__symptom__items__value.splice(item4, 1);
        }
        var item5 = this.checkbox__symptom__items__value.indexOf("5");
        if (item5 > -1) {
          this.checkbox__symptom__items__value.splice(item5, 1);
        }
        var item6 = this.checkbox__symptom__items__value.indexOf("6");
        if (item6 > -1) {
          this.checkbox__symptom__items__value.splice(item6, 1);
        }
      }
    },
    // 有2 不能有13
    symptom2() {
      var item2 = this.checkbox__symptom__items__value.indexOf("2");
      if (item2 > -1) {
        var item1 = this.checkbox__symptom__items__value.indexOf("1");
        if (item1 > -1) {
          this.checkbox__symptom__items__value.splice(item1, 1);
        }
        var item3 = this.checkbox__symptom__items__value.indexOf("3");
        if (item3 > -1) {
          this.checkbox__symptom__items__value.splice(item3, 1);
        }
      }
    },
    // 有3 不能有12
    symptom3() {
      var item3 = this.checkbox__symptom__items__value.indexOf("3");
      if (item3 > -1) {
        var item1 = this.checkbox__symptom__items__value.indexOf("1");
        if (item1 > -1) {
          this.checkbox__symptom__items__value.splice(item1, 1);
        }
        var item2 = this.checkbox__symptom__items__value.indexOf("2");
        if (item2 > -1) {
          this.checkbox__symptom__items__value.splice(item2, 1);
        }
      }
    },
    // 有4 5 6 不能有1
    symptom4() {
      var item1 = this.checkbox__symptom__items__value.indexOf("1");
      if (item1 > -1) {
        this.checkbox__symptom__items__value.splice(item1, 1);
      }
    },
    // check最终检查
    check() {
      if (
        this.field__user__items.hcountry &&
        this.field__user__items.hdr &&
        this.field__user__items.hnp &&
        this.field__user__items.hpr &&
        this.field__user__items.hra &&
        this.field__user__items.hda &&
        this.radio__often__items.value &&
        this.radio__recent__items.value&&
        this.checkbox__symptom__items__value
        // &&this.
      ) {
        alert("填报成功!");
      } else {
        alert("必填项没有填写完全!");
      }
    },
  },
  computed: {
    agree() {
      var result;
      if (this.checklist__end__items.value == 1) {
        result = false;
      } else {
        result = true;
      }
      return result;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "微软雅黑";
  box-sizing: border-box;
}
.addinf >>> .mint-header {
  background-color: unset;
  color: black;
}
.baseinf,
.otherinf,
.symptominf {
  margin: 0 10px;
  padding: 2vh 0;
  border-bottom: 1px solid rgb(255, 0, 0);
}
.baseinf >>> .mint-cell-wrapper {
  background-image: none;
  padding: 0;
}
.baseinf >>> .mint-cell:last-child {
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
.otherinf >>> .mint-cell-wrapper {
  background-image: none;
}
.otherinf >>> .mint-cell:last-child {
  background-image: none;
}
.symptominf >>> .mint-cell:last-child {
  background-image: none;
}
.symptominf >>> .van-checkbox__icon {
  margin-left: 1.5em;
  margin-right: 0.2em;
}
.symptominf >>> .van-checkbox {
  min-height: 48px;
}
.floot >>> .mint-cell-wrapper {
  background-image: none;
  margin-bottom: 10px;
}
/**问题类型弹框样式 */
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #eee;
  height: 44px;
  width: 100vw;
  line-height: 44px;
}
.picker-toolbar-title.usi-btn-cancel,
.usi-btn-sure {
  color: #26a2ff;
}
</style>