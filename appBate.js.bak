// 加载Express模块
const express = require('express');

// 加载MySQL模块
const mysql = require('mysql');

// 加载bodyParser模块
const bodyParser = require('body-parser');

// 加载MD5模块
const md5 = require('md5');

// 创建MySQL连接池
const pool = mysql.createPool({
  host: '127.0.0.1',   //MySQL服务器地址
  port: 3306,          //MySQL服务器端口号
  user: 'root',        //数据库用户的用户名
  password: '',        //数据库用户密码
  database: 'healthCode',    //数据库名称
  connectionLimit: 20, //最大连接数
  charset: 'utf8'      //数据库服务器的编码方式
});

// 创建服务器对象  
const server = express();

server.use(bodyParser.urlencoded({
  extended: false
}));

// 加载CORS模块
const cors = require('cors');

//使用CORS中间件
server.use(cors({
	//服务器告诉浏览器
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));



// 用户登录接口 
server.post('/login', (req, res,next) => {
  //获取用户名和密码信息
  let uname = req.body.uname;
  let upwd = req.body.upwd;
  // SQL语句 user表
  let sql = 'SELECT uid,uname,urlname,uphone,uID_,ucountry,avatar FROM user WHERE uname=? AND upwd=?';
  pool.query(sql, [uname, upwd], (error, results) => {
    if (error){

      next(error);

      return
    }
    if(results.length == 0){ //登录失败
      res.send({message:'login failed',code:201});
    } else {                 //登录成功
      res.send({message:'ok',code:200,result:results});
    }
  });

});

//绑定手机接口 通过手机号查询
server.post('/sp', (req, res,next) => {
  //解析手机号
  let uphone = req.body.uphone;
 
  // SQL语句 user表
  let sql = 'SELECT urlname,uID_ FROM user WHERE uphone=?';
  pool.query(sql, [uphone], (error, results) => {
    if (error){

      next(error);

      return
    }
    if(results.length == 0){ //查询失败
      res.send({message:'search failed',code:201});
    } else {                 //查询成功
      res.send({message:'ok',code:200,result:results});
    }
  });

});


//通过手机号查询 healthinfo表
server.post('/sn', (req, res,next) => {
  //解析手机号
  let hphone = req.body.hphone;
 
  // SQL语句 user表
  let sql = 'SELECT hname,hsex FROM healthinfo WHERE hphone=?';
  pool.query(sql, [uphone], (error, results) => {
    if (error){
      next(error);
      return;
    }
    if(results.length == 0){ //查询失败
      res.send({message:'search failed',code:201});
    } else {                 //查询成功
      res.send({message:'ok',code:200,result:results});
    }
  });
});





//用户注册接口
server.post('/register', (req, res,next) => {
 
  // 获取用户名和密码信息
  let uname = req.body.uname;
  let upwd = req.body.upwd;
  let uphone=req.body.uphone;
  let ucountry=req.body.ucountry;
  //以uname为条件进行查找操作，以保证用户名的唯一性 user表
  let sql = 'SELECT COUNT(uid) AS count FROM user WHERE uname=?';
  pool.query(sql, [uname], (error, results) => {
    if (error){

      next(error);

      return
    }
    let count = results[0].count;
    if (count == 0) {
      // 将用户的相关信息插入到数据表
      sql = 'INSERT user(uname,upwd,uphone,ucountry) VALUES(?,?,?,?)';
      pool.query(sql, [uname, upwd,uphone,ucountry], (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200 });
      })
    } else {
      res.send({ message: 'user exists', code: 201 });
    }
  });
});



//填表接口
server.post('/form', (req,res,next) => {
 
  //获取填表数据
  let hname = req.body.hname;
  let hphone = req.body.hphone;
  let hIDtype = req.body.hIDtype;
  let hID_ = req.body.hID_;
  let hsex = req.body.hsex;
  let hbirthday = req.body.hbirthday;
  let hcountry = req.body.hcountry;
  let hdr = req.body.hdr;
  let hnp = req.body.hnp;
  let hpr = req.body.hpr;
  
  let hra = req.body.hra;
  let hda = req.body.hda;
  let hishpr = req.body.hishpr;
  let hisnf0 = req.body.hisnf0;
  let hisnf1 = req.body.hisnf1;
  let hisnf10 = req.body.hisnf10;
  let hisnf11 = req.body.hisnf11;
  let hisnf12 = req.body.hisnf12;
  let hisnf2 = req.body.hisnf2;
  let hisnf2_0 = req.body.hisnf2_0;

  let hisnf3 = req.body.hisnf3;
  let hisnf3_0 = req.body.hisnf3_0;
  let hisnf3_1 = req.body.hisnf3_1;
  let hisrc = req.body.hisrc;
  let hspm0 = req.body.hspm0;
  let hspm1 = req.body.hspm1;
  let hspm2 = req.body.hspm2;
  let hspm3 = req.body.hspm3;
  let hspm4 = req.body.hspm4;
  let hspm5= req.body.hspm5;
  let hspm50=req.body.hspm50;
  //注入数据 healthinfo表
  sql = 'INSERT healthinfo(hname,hphone,hIDtype,hID_,hsex,hbirthday,hcountry,hdr,hnp,hpr,hra,hda,hishpr,hisnf0,hisnf1,hisnf10,	hisnf11,hisnf12,hisnf2,hisnf2_0,hisnf3,hisnf3_0,hisnf3_1,hisrc,hspm0,hspm1,hspm2,hspm3,hspm4,hspm5,hspm50) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    
      // 将用户的相关信息插入到数据表
      pool.query(sql, [hname,hphone,hIDtype,hID_,hsex,hbirthday,hcountry,hdr,hnp,hpr,hra,hda,hishpr,hisnf0,hisnf1,hisnf10,	hisnf11,hisnf12,hisnf2,hisnf2_0,hisnf3,hisnf3_0,hisnf3_1,hisrc,hspm0,hspm1,hspm2,hspm3,hspm4,hspm5,hspm50], (error, results) => {
        if (error){

          next(error);
    
          return
        }
        res.send({ message: 'ok', code: 200});
      })
});


//接种详情页接口
server.post('/vd', (req,res,next) => {
   //解析身份证号
   let vID_=req.body.vID_;

  //以身份证号为条件进行查找操作，确定用户是否接种 vd表
  let sql = 'SELECT COUNT(vid) AS count FROM vd WHERE vID_=?';
  pool.query(sql, [vID_], (error, results) => {
    if (error){

      next(error);

      return
    }
    let count = results[0].count;
    if (count == 0) {
		 res.send({ message: 'vID_ not exists', code: 201 });
    } else {
     // 将用户的相关信息插入到数据表
      sql = 'SELECT vcn,vtime,vplace,vID_ FROM vd where vID_=?';
      pool.query(sql, [vID_], (error, results) => {
        if (error) {
			next(error);
			return
		} ;
        res.send({ message: 'ok', code: 200 ,result:results});
      })
    }
  });
});



//使用回调函数中间件获取错误
server.use((error,req,res,next)=>{
  //后端打印错误
  console.log(error);

  //返回错误状态码和错误信息 显示为json对象
  res.send({code:502,msg:"服务器端错误"})
})

 // 指定服务器对象监听的端口号
  server.listen(3000, () => {
    console.log('server is running...');
  });
