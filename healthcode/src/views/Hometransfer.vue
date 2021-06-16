<template>
    <div class="transfer_item">
        <div class="transfer_icon">
             <img src="../assets/defend.png" width="33%"/>
        </div>
        <h4 class="transfer_f1">防疫健康码·渝康码</h4>
        <div class="transfer_f2">此码由“渝康码”提供，可在以下场所向相关工作人员出示此码，方便疫情期间出行。</div>
        <div class="transfer_f3">
            <ul style="list-style:circle;" class="f3_ul">
                <li>
                    <div class="f3_d1">公共场所</div>
                    <div class="f3_d2">小区门岗、写字楼、商场、餐饮门店、机场、火车站、汽车站等</div> 
                </li>
                <li>
                    <div class="f3_d1">网络区域</div>
                    <div class="f3_d2">上门走访、巡检排查、检查站等</div>
                </li>
                <li>
                    <div class="f3_d1">医疗场所</div>
                    <div class="f3_d2">医院、诊所、社区卫生服务中心等</div>
                </li>
            </ul>
        </div>
        <mt-button class="transfer_btn" @click.native="checkOut">查看防疫健康码</mt-button>
    </div>
</template>

<style scoped>
.transfer_item{
    margin: 0 20%;
    text-align: center;
    font-family: '微软雅黑'
}
.transfer_icon{
    width: 60%;
    margin: 0 auto;
    margin-top: 20%;
}
.transfer_f2{ 
    text-align: left;
    margin-top: 20px;
    color: rgb(160, 160, 160);
}
.transfer_f3{
    text-align: left;
}
.f3_d1{
    margin-top: 30px;
    font-weight:bold;
}
.f3_d2{
    color: rgb(160, 160, 160);
    margin-top: 4%;
}
.transfer_btn{
    background-color: rgba(3, 150, 11, 0.651);
    color: #fff;
    width: 200px;
    margin-top: 30%;
}
</style>

<script>
export default {
    methods: {
        checkOut(){
            this.$router.push("/Addinf");
        }
    },
}


</script>

