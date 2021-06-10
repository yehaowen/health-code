<template>
    <div>
         <header>
            <mt-header title="重庆健康出行一码通">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
            <div>
                <img src="../views/success.png" alt=""><h1>提交成功</h1>
                您已经成功提交，可立即生成渝康码
            </div>
            <el-button type="primary">立即生成渝康码</el-button>
         </header>
            <el-footer>
                <h3>咨询专线：114-7</h3><br>
                中共重庆市委政法委员会<br>
                重庆市大数据应用发展局（主办）
                腾讯公司/腾讯云/数字重庆公司提供技术支持
            </el-footer>
    </div>
</template>