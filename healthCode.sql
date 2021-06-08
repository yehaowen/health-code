#设置client-Server 编码 utf8

SET NAMES UTF8;

#先丢弃,再创建数据库healthCode

DROP DATABASE IF EXISTS healthCode;

#创建数据库
CREATE DATABASE healthCode CHARSET=UTF8;

#进入数据库healthCode
USE healthCode;

#创建用户表user

CREATE TABLE user(

	uid INT PRIMARY KEY AUTO_INCREMENT,

	uname VARCHAR(64) NOT NULL COMMENT '昵称',

	upwd VARCHAR(64) NOT NULL COMMENT '密码',

	uphone VARCHAR(64) NOT NULL UNIQUE COMMENT '手机号 唯一',

	ucountry VARCHAR(64) NOT NULL COMMENT '国家/地区'

);

#插入数据到user
INSERT INTO user VALUES 

(NULL,'csl','123456','13983111501','中国'),

(NULL,'yhw','123456','13983111502','中国'),

(NULL,'lyh','123456','13983111503','中国'),

(NULL,'zzh','123456','13983111504','中国'),

(NULL,'hsy','123456','13983111505','中国');


#创建接种详情页 vd 

CREATE TABLE vd(
	vid INT PRIMARY KEY AUTO_INCREMENT, 

	vcn VARCHAR(64) NOT NULL COMMENT '疫苗名称',

	vtime VARCHAR(64) NOT NULL COMMENT '接种时间',

	vplace VARCHAR(64) NOT NULL COMMENT '接种地点',

	vID_ VARCHAR(64) NOT NULL UNIQUE COMMENT '身份证'
 
);

INSERT INTO vd VALUES(NULL,'新冠Vero(科兴中维)','2021-3-3','重庆市\北碚区','500109199308300011');


#创建填写信息表 healthInfo

CREATE TABLE healthInfo(

hid INT PRIMARY KEY AUTO_INCREMENT,

hname VARCHAR(64) NOT NULL COMMENT '真实姓名',

hphone VARCHAR(64) NOT NULL UNIQUE COMMENT '手机号',

hIDtype VARCHAR(64) NOT NULL COMMENT '证件类型',

hID_ VARCHAR(64) NOT NULL UNIQUE COMMENT '证件号',

hsex INT NOT NULL COMMENT '性别',

hbirthday VARCHAR(64) NOT NULL COMMENT '生日',

hcountry VARCHAR(64) NOT NULL COMMENT '国家/地区',

hdr VARCHAR(64) NOT NULL COMMENT '户籍所在地',

hnp VARCHAR(64) NOT NULL COMMENT '籍贯',

hpr VARCHAR(64) NOT NULL COMMENT '居住省/市区',

hra VARCHAR(64) NOT NULL COMMENT '居住住址',

hda VARCHAR(64) NOT NULL COMMENT '详细地址',

hishpr INT NOT NULL COMMENT '是否常住xx',

hisnf0 INT NOT NULL COMMENT '一直在重庆3个月或以上',

hisnf1 INT COMMENT '来或返回重庆超14日',

hisnf10 INT COMMENT '中国大陆其他省(自治区)市',

hisnf11 INT COMMENT '中国港澳台地区',

hisnf12 INT COMMENT '国外',

hisnf2 INT COMMENT '来或返回重庆不超14日(含14)',

hisnf2_0 VARCHAR(64) COMMENT '来或返回重庆日期',

hisnf20 INT COMMENT '中国大陆其他省(自治区)市',

hisnf21 INT COMMENT '中国港澳台地区',

hisnf22 INT COMMENT '国外',

hisnf3  INT COMMENT '目前仍在外地',

hisnf3_0 VARCHAR(64) COMMENT '目前所在地',

hisnf3_1 VARCHAR(64) COMMENT '拟返回重庆日期',

hisnf30 INT COMMENT '中国大陆其他省(自治区)市',

hisnf31 INT COMMENT '中国港澳台地区',

hisnf32 INT COMMENT '国外',

hisrc INT NOT NULL COMMENT '14日内接触过患者',

hspm0  INT NOT NULL COMMENT '自觉正常',

hspm1  INT NOT NULL COMMENT '发热37.3以下',

hspm2  INT NOT NULL COMMENT '/发热37.3以上',

hspm3  INT NOT NULL COMMENT '干咳',

hspm4  INT NOT NULL COMMENT '乏力',

hspm5  INT NOT NULL COMMENT '其它症状',

hspm50 VARCHAR(64) COMMENT '其它症状简述',



FOREIGN KEY (hphone) REFERENCES user(uphone)

ON UPDATE CASCADE,

FOREIGN KEY (hID_) REFERENCES vd(vID_)

ON UPDATE CASCADE
) ;

#插入数据到healthInfo

INSERT INTO healthInfo VALUES (NULL,'李冬冬','13983111501','身份证','500109199308300011',1,'1993-9-4','中国大陆','重庆市','重庆','重庆','xx区xx路xx街道','重庆市xx区',1,1,0,0,0,0,0,null,0,0,0,0,null,null,0,0,0,0,0,0,0,0,0,0,null);





