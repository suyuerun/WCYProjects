/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : aceadmin

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2017-08-15 14:01:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for adminusers
-- ----------------------------
DROP TABLE IF EXISTS `adminusers`;
CREATE TABLE `adminusers` (
  `id` int(120) NOT NULL AUTO_INCREMENT,
  `uname` varchar(120) NOT NULL COMMENT '用户名',
  `password` varchar(120) NOT NULL,
  `role` tinyint(120) NOT NULL COMMENT '1为普通管理员，0为超级管理员',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unameuniq` (`uname`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of adminusers
-- ----------------------------
INSERT INTO `adminusers` VALUES ('1', 'admin-1', 'admin-1', '1');
INSERT INTO `adminusers` VALUES ('2', 'admin-2', 'admin-2', '2');
INSERT INTO `adminusers` VALUES ('3', 'admin-3', 'admin-3', '3');
INSERT INTO `adminusers` VALUES ('4', 'superadmin', 'superadmin', '0');
INSERT INTO `adminusers` VALUES ('6', 'admin-4', 'admin-4', '2');
