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
    <!-- 单选框 -->
    <h3>是否常住重庆</h3>
    <mt-radio
      v-model="radio__often__items.value"
      :options="radio__often__items.options"
    >
    </mt-radio>
    <h3>近期是否在重庆</h3>
    <mt-radio
      v-model="radio__recent__items.value"
      :options="radio__recent__items.options"
    >
    </mt-radio>
    <!-- 特殊选框 -->
    <!-- label: "来或返回重庆不超过14日(含14日)", value: "3" -->
    <div class="baseinf">
      <p>来或返回重庆日期</p>
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
        @confirm="handleConfirm__old"
      >
      </mt-datetime-picker>
    </div>

    <!-- label: "目前仍在外地", value: "4" -->
    <div class="baseinf">
      <p>目前所在地</p>
      <mt-field
        type="text"
        placeholder="请选择目前所在地点"
        :value="questionType"
        ><a @click="openQuestionType" style="color: #0066ff">选择</a></mt-field
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
    <div class="baseinf">
      <p>拟返回重庆日期</p>
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
    <!-- label: "来或返回重庆超过14日", value: "2" -->
    <div class="baseinf">
      <h3>近一个月旅居史</h3>
      <mt-checklist
        v-model="checklist__travel__items.value"
        :options="checklist__travel__items.options"
      >
      </mt-checklist>
    </div>
    <div class="baseinf">
      <h3>近期接触史(选填)</h3>
      <p>自我感觉14日内曾与患者接触过或</p>
      <p>近期与确诊患者有接触.如乘搭同一公共交通工具等情况</p>
      <mt-switch v-model="switch__item"></mt-switch>
    </div>

    <div class="baseinf">
      <h3>是否有如下症状(必选)</h3>
      <mt-checklist
        v-model="checklist__symptom__items.value"
        :options="checklist__symptom__items.options"
      >
      </mt-checklist>
      <p>其他症状</p>
      <mt-field
        type="text"
        placeholder="请简要描述症状情况(不超过10个汉字)"
        value=""
      ></mt-field>
    </div>
    <mt-checklist
      v-model="checklist__end__items.value"
      :options="checklist__end__items.options"
    >
    </mt-checklist>
    <mt-button type="primary" size="large">提交</mt-button>
    <p>所有公民信息仅用于疫情防控需要,数据不作他用</p>
    <a style="align-item: center">用户服务协议</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio__often__items: {
        value: "1",
        options: [
          { label: "是,在重庆居住了已有半年以上", value: "1" },
          { label: "否,我是临时来重庆的", value: "2" },
        ],
      },
      radio__recent__items: {
        value: "1",
        options: [
          { label: "一直在重庆3个月或以上", value: "1" },
          { label: "来或返回重庆超过14日", value: "2" },
          { label: "来或返回重庆不超过14日(含14日)", value: "3" },
          { label: "目前仍在外地", value: "4" },
        ],
      },
      checklist__travel__items: {
        value: [],
        options: [
          { label: "中国大陆其他省(自治区)市", value: "1" },
          { label: "中国港澳台地区", value: "2" },
          { label: "国外", value: "3" },
        ],
      },
      datetime__old__items: {
        pickerValue: "",
        year: "2021",
        month: "01",
        date: "01",
      },
      datetime__new__items: {
        pickerValue: "",
        year: "2021",
        month: "01",
        date: "01",
      },
      questionType: "", //当前问题类型
      questionTypeVal: "", //当前问题类型-改变后的
      popupVisible: false, //问题类型弹框
      popupSlots: [
        //问题类型弹框数据
        {
          values: ["安全帽", "手环", "头盔", "pad"],
        },
      ],
      switch__item: "",
      checklist__symptom__items: {
        value: [],
        options: [
          { label: "自觉正常", value: "1" },
          { label: "发热37.3℃以下", value: "2" },
          { label: "发热37.3℃(含)以上", value: "3" },
          { label: "干咳", value: "4" },
          { label: "乏力", value: "5" },
          { label: "其他症状", value: "6" },
        ],
      },
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
    openPicker__old() {
      this.$refs.picker__old.open();
    },
    handleConfirm__old(value) {
      this.datetime__old__items.year = value.getFullYear();
      this.datetime__old__items.month = value.getMonth() + 1;
      this.datetime__old__items.date = value.getDate();
    },
    openPicker__new() {
      this.$refs.picker__new.open();
    },
    handleConfirm__new(value) {
      this.datetime__new__items.year = value.getFullYear();
      this.datetime__new__items.month = value.getMonth() + 1;
      this.datetime__new__items.date = value.getDate();
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    /**
     * 打开问题类型的弹框
     */
    openQuestionType() {
      this.popupVisible = true;
    },
    // 问题类型弹框点击确认
    popupOk() {
      this.questionType = this.questionTypeVal;
      this.popupVisible = false;
    },
    //问题类型的弹框picker值发生改变
    onValuesChange(picker, values) {
      this.questionTypeVal = values[0];
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
.baseinf {
  margin: 0 10px;
  padding: 2vh 0;
  border-bottom: 1px solid #eee;
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