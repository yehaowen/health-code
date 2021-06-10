<template>
    <div>
        <!-- 顶部导航 -->
        <mt-header class="tou" fixed title="新冠疫苗接种详情页">
            <mt-button slot="left" icon="back"></mt-button>
        </mt-header>
        <div>
            <!-- 用户信息 -->
            <div class="yonghu">| 用户信息</div><br>
            <div class="rname">&nbsp;&nbsp;用户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {{article.hname}}</div><br>
            <div>&nbsp;&nbsp;证件号码&nbsp;:&nbsp;&nbsp;&nbsp;{{article.hID}}</div><br><br>
            <!-- 疫苗接种信息 -->
            <div class="yonghu">| 疫苗接种信息</div><br>
            <div>&nbsp;&nbsp;疫苗名称&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br>
            <div>&nbsp;&nbsp;接种日期&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br>
            <div>&nbsp;&nbsp;接种地点&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br><br>
            <hr style="background-color: rgb(202, 201, 201); height:1px; border:none; width:338px">
            <div>&nbsp;&nbsp;疫苗名称&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br>
            <div>&nbsp;&nbsp;接种日期&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br>
            <div>&nbsp;&nbsp;接种地点&nbsp;:&nbsp;&nbsp;&nbsp;50000331231</div><br><br>
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
        
        }
    },
    mounted(){
        let hid = this.$router.query.hid;
        this.axios.post('/form?hid='+hid).then(result=>{
            this.article = result.data.result
        });
        let vid = this.$router.query.vid;
        this.axios.post('')
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