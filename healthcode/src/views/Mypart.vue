<template>
    <div>
        <div class="absolute"><img src="../assets/yimiao.png" alt=""> <div class="num"> 
            <span>{{arr[0]}}</span> <span>{{arr[1]}}</span>
             </div>  </div>
        <div class="top">
            <h3 class="title">我的渝康码</h3>
            <h3 class="name">{{hname}}</h3>
            <h3 class="link">关于渝康码<span>|</span>渝康码管理</h3>
        </div>
        <div class="mid">
            <span class="update" >更新于：{{Time}}</span>
            <span class="submit"> 立即上报  <a>  <img class="back" src="../assets/leftback.png" alt=""></a></span>
        </div>
        <div class="bottom ">
            <div class="bm1 clearfix">
                <span class="bm1-1"> <strong>最新健康自查</strong> </span>
                <span class="bm1-2"> <strong>无异常</strong> </span> 
            </div>
            <div class="bm2 ">
            <div class="bm2-1"><img src="../assets/gps.png" alt=""><span> 行程信息</span><button class="btn-t">核验行程</button></div>
            <h6>14天内未到访到过中高风险地区所在城市</h6>           
            </div>
            <div class="bm3">
                <img src="../assets/zhen.png" alt=""> <span>已接种新冠疫苗2剂（共2剂）</span> <a><img class='back' src="../assets/rightback.png" alt=""></a> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
    return{
        time:'',
        Time:'',
        arr:[],
        hname:''
         } 
     },
     mounted(){
         for(let i=0 ;i<2 ; i++){
             var a=Math.floor(Math.random().toFixed(4)*10000)
             this.arr.push(a)   
         }
              
         this.time= new Date()
         let y=this.time.getYear()-100;
        let m= this.time.getMonth()+1
        let d=this.time.getDate()
        let h=this.time.getHours()
        let M=this.time.getMinutes()
        let s =this.time.getSeconds()
        this.Time=`20${y}/${m}/${d} ${h}:${M}:${s}`
     }
}

</script>

<style scoped>

    *{
        font-family: "微软雅黑";
        vertical-align: middle;
    }
    .absolute{
        position: absolute;
        margin-left: 27.07vw;
        margin-top: 30.20vh;
        border: 1.13vw solid #e2c377;
        width: 25.64vh;
        height: 25.64vh;
    }
    .absolute img{
        width: 6vh;
        height: 6vh;
        margin-left: -6vw;
        margin-top: -3vh;
    }
    .num{
        margin-top: 26.01vh;
        margin-left: 7.50vw;
        font-size: 1.5em;
        color: #fff;
        width: 29vw;
    }
    h3{
        text-align: center;
    }
    .top{
        color: #fefefe;
        border-top: 1px solid transparent;
        height: 67.09vh;
        background-color: rgb(64, 133, 232);
        border-bottom: 2px solid rgb(80, 150, 234);
    }
    .mid{
        color: #fefefe;
        height: 6.00vh;
        background-color: rgb(64, 133, 232);
    }
    .mid span{
        line-height: 6.00vh;
    }
    .bottom{
        height: 26.91vh;
        background-color: rgb(255, 255, 255);
    }
    .btn-t{
        background-color: #387fe6;
        outline: none;
        color: rgb(250, 250, 250);
        border: none;
        border-radius: 0.5vh;
        float: right;
        margin-right: 5.4vw;
        width: 18.90vw;
        height: 4.25vh;
        margin-top: 3vh;
        padding: 1.8vw;
        
    } 
    .clearfix::after{
         content: "\200B"; 
        display: block;
        height: 0;
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }
    .bottom img{
        width: 7.6vw;
    } 
    
    .title{
        color: #fff;
        font-size:1.5em;
        margin-top: 4.80vh;
    }
    .name{
        font-size: 1.75em;
        margin-top: 7.50vh;
        margin-bottom: 2.630vh;
    }
    .link span{
        margin-left: 3.33vw;
        margin-right: 3.33vw;
    }
    .update{
        float: left;
        margin-left: 5.6vw;
    }
    .submit{
        float: right;
        margin-right: 5.6vw;
    }
    .bm1 {
        color: #000;
        margin-top: 3.97vh;
    }
    .bm1-1{
        float: left;
        margin-left: 5.4vw;
    }
    .bm1-2{
        float: right;
        margin-right: 5.4vw;
    }
    .bm2 img{
        margin-left: 5.4vw;
        margin-right: 2vw;
    }
    .bm2-1{
        margin-top: 2vh;
        line-height: 5vh;
        height: 5vh;
    }
    h6{
        color:#666;
        margin-top: 0.5vh;
        margin-left: 13.4vw;
    }
    .bm3{
        height: 11vh;
        line-height: 11vh;
    }
    .bm3 img{
        margin-left: 5.4vw;
        margin-right: 2vw;
    }
    .bm3 .back{
        margin-top: 2vh;
        margin-left: 22.00vw;
        height: 3.2vh;
    }
    .submit .back{
        float: right;
        margin-right: -2.60vw;
        margin-top: 1.15vh;
        margin-left: 3vw;
        height: 3.2vh;
    }
</style>