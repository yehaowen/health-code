<template>
    <div>
        <!-- 顶部导航 -->
        <mt-header class="tou" fixed title="新冠疫苗接种详情页">
            <mt-button slot="left" icon="back"></mt-button>
        </mt-header>
        <div>
            <!-- 用户信息 -->
            <div class="yonghu">| 用户信息</div><br>
            <div class="rname">&nbsp;&nbsp;用户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{{articles.vcn}} </div><br>
            <div>&nbsp;&nbsp;证件号码&nbsp;:&nbsp;&nbsp;{{articles.vID_}}</div><br><br>
            <!-- 疫苗接种信息 -->
            <div class="yonghu">| 疫苗接种信息</div><br>
            <div>&nbsp;&nbsp;疫苗名称&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vcn}}</div><br>
            <div>&nbsp;&nbsp;接种日期&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vtime}}</div><br>
            <div>&nbsp;&nbsp;接种地点&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vplace}}</div><br><br>
            <hr style="background-color: rgb(202, 201, 201); height:1px; border:none; width:338px">
            <div>&nbsp;&nbsp;疫苗名称&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vcn}}</div><br>
            <div>&nbsp;&nbsp;接种日期&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vtime}}</div><br>
            <div>&nbsp;&nbsp;接种地点&nbsp;:&nbsp;&nbsp;&nbsp;{{articles.vplace}}</div><br><br>
        </div>
        <p class="p1">上述信息若与本人接种情况不符，请向接种单位反馈<br>
            <span style="color:red">*</span>疫苗接种数据持续更新中
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vID_: "500109199308300011",
            articles: [],
        }
    },
    mounted(){
        console.log(this.vID_);
        let id = this.vID_;
        this.axios.post('/vd',`vID_=${id}`).then((result)=>{
            console.log(result);
            let userVcn = result.data.result[0]
            this.articles = userVcn
            
        })
    }
}
</script>
<style scoped>
    .tou{
        background-color: white;
        color: black;
    }
    .p1{
        font-size: 5px;
        text-align: center;
        color: rgb(202, 201, 201);
    }
</style>
