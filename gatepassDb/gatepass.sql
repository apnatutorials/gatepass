CREATE DATABASE  IF NOT EXISTS `gatepass` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gatepass`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: gatepass
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buildingId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `name` varchar(155) DEFAULT NULL,
  `userId` varchar(55) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,1,2,'Balendra Kumar Singh','balendra4u','iiita','balendra4u@gmail.com','8604243786',2);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `account_view`
--

DROP TABLE IF EXISTS `account_view`;
/*!50001 DROP VIEW IF EXISTS `account_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `account_view` AS SELECT 
 1 AS `id`,
 1 AS `buildingId`,
 1 AS `buildingEName`,
 1 AS `buildingHName`,
 1 AS `departmentId`,
 1 AS `departmentEName`,
 1 AS `departmentHName`,
 1 AS `name`,
 1 AS `userId`,
 1 AS `password`,
 1 AS `email`,
 1 AS `phone`,
 1 AS `type`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `building`
--

DROP TABLE IF EXISTS `building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `building` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eName` varchar(255) DEFAULT NULL,
  `hName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
INSERT INTO `building` VALUES (1,'Bapu bhawan','Bapu Bhawan'),(2,'Naveen Bhawan','Naveen Bhawan');
/*!40000 ALTER TABLE `building` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `building_view`
--

DROP TABLE IF EXISTS `building_view`;
/*!50001 DROP VIEW IF EXISTS `building_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `building_view` AS SELECT 
 1 AS `id`,
 1 AS `eName`,
 1 AS `hName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `eName` varchar(255) DEFAULT NULL,
  `hName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Department 1','department 1'),(2,'Department 1','Department 2');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `department_view`
--

DROP TABLE IF EXISTS `department_view`;
/*!50001 DROP VIEW IF EXISTS `department_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `department_view` AS SELECT 
 1 AS `id`,
 1 AS `eName`,
 1 AS `hName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `designation`
--

DROP TABLE IF EXISTS `designation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `designation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eName` varchar(255) DEFAULT NULL,
  `hName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designation`
--

LOCK TABLES `designation` WRITE;
/*!40000 ALTER TABLE `designation` DISABLE KEYS */;
/*!40000 ALTER TABLE `designation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `designation_view`
--

DROP TABLE IF EXISTS `designation_view`;
/*!50001 DROP VIEW IF EXISTS `designation_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `designation_view` AS SELECT 
 1 AS `id`,
 1 AS `eName`,
 1 AS `hName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `officer`
--

DROP TABLE IF EXISTS `officer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `officer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buildingId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `designationId` int(11) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  `roomNo` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `extention` varchar(255) DEFAULT NULL,
  `phoneOffice` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `officer`
--

LOCK TABLES `officer` WRITE;
/*!40000 ALTER TABLE `officer` DISABLE KEYS */;
/*!40000 ALTER TABLE `officer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `officer_view`
--

DROP TABLE IF EXISTS `officer_view`;
/*!50001 DROP VIEW IF EXISTS `officer_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `officer_view` AS SELECT 
 1 AS `id`,
 1 AS `buildingId`,
 1 AS `departmentId`,
 1 AS `designationId`,
 1 AS `floor`,
 1 AS `roomNo`,
 1 AS `name`,
 1 AS `extention`,
 1 AS `phoneOffice`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `pass`
--

DROP TABLE IF EXISTS `pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `passtype` tinyint(1) DEFAULT NULL,
  `passNo` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `office` varchar(100) DEFAULT NULL,
  `reference1` varchar(100) DEFAULT NULL,
  `reference2` varchar(100) DEFAULT NULL,
  `issueDate` datetime DEFAULT NULL,
  `referenceNo` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `receiptNo` varchar(20) DEFAULT NULL,
  `fromDate` datetime DEFAULT NULL,
  `toDate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pass`
--

LOCK TABLES `pass` WRITE;
/*!40000 ALTER TABLE `pass` DISABLE KEYS */;
/*!40000 ALTER TABLE `pass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `pass_view`
--

DROP TABLE IF EXISTS `pass_view`;
/*!50001 DROP VIEW IF EXISTS `pass_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `pass_view` AS SELECT 
 1 AS `id`,
 1 AS `passtype`,
 1 AS `passNo`,
 1 AS `name`,
 1 AS `designation`,
 1 AS `office`,
 1 AS `reference1`,
 1 AS `reference2`,
 1 AS `issueDate`,
 1 AS `referenceNo`,
 1 AS `phone`,
 1 AS `address1`,
 1 AS `address2`,
 1 AS `dob`,
 1 AS `receiptNo`,
 1 AS `fromDate`,
 1 AS `toDate`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `vahanpass`
--

DROP TABLE IF EXISTS `vahanpass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vahanpass` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `passType` tinyint(1) DEFAULT NULL,
  `passNo` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `office` varchar(100) DEFAULT NULL,
  `vehicleNo1` varchar(100) DEFAULT NULL,
  `vehicleNo2` varchar(100) DEFAULT NULL,
  `vehicleReference1` varchar(100) DEFAULT NULL,
  `vehicleReference2` varchar(100) DEFAULT NULL,
  `issueDate` datetime DEFAULT NULL,
  `referenceNo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vahanpass`
--

LOCK TABLES `vahanpass` WRITE;
/*!40000 ALTER TABLE `vahanpass` DISABLE KEYS */;
INSERT INTO `vahanpass` VALUES (2,1,11,'test','MD','Office z','1234','5678','91011','121314','2008-07-04 00:00:00','123'),(3,1,11,'test','MD','Office z','1234','5678','91011','121314','2008-07-04 00:00:00','123');
/*!40000 ALTER TABLE `vahanpass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gatepass'
--
/*!50003 DROP PROCEDURE IF EXISTS `account_add_edit_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`starbull`@`localhost` PROCEDURE `account_add_edit_procedure`(
		IN  _id INT, 
		IN  _buildingId INT,     
        IN  _departmentId INT,        
		IN  _name varchar(155), 
		IN  _userId varchar(160),
		IN  _password VARCHAR(120),		
		IN 	_email VARCHAR(155),
        IN 	_phone VARCHAR(14),
		IN 	_type TINYINT(1),
        
     
		OUT returnid INT
  )
BEGIN
Declare rowcount Int default 0;
-- --------------------------------------------------------------------------------
-- Used to add/edit a user account
-- --------------------------------------------------------------------------------
START TRANSACTION;
  IF (_id = -1) THEN 
		INSERT INTO `gatepass`.`account` (				   
				  `account`.`buildingId`, 
				  `account`.`departmentId`, 
				  `account`.`name`,
				  `account`.`userId`,
                  `account`.`password`,
				  `account`.`email`,
				  `account`.`phone` ,
				  `account`.`type`
                  
		)
		values
		(				 
				   _buildingId,
				   _departmentId,
				   _name,
				   _userId,				   
				   _password,
                   _email,
				   _phone,
                   _type
		); 
   ELSE 
		UPDATE `gatepass`.`account`
            set  `account`.`firstName` = _firstName,
                 `account`.`lastName` = _lastName, 
				 `account`.`loginName` = _loginName,
                 `account`.`password` = _password,
                 `account`.`email` = _email,
                 `account`.`phone` = _phone,                 
                 `account`.`type` = _type 
                 
		WHERE `account`.`id` = _id ;   
   END IF;
 
   SET returnid := -1 ;
   IF (_id != -1 ) THEN 
       SET returnid := id ; 
   ELSE
         if(ROW_COUNT() > 0) then
            select last_insert_id() as intRecordKey;
            set returnid = last_insert_id();			 
         end if;	 
   END IF;	
   COMMIT;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pass_add_edit_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pass_add_edit_procedure`(
		IN  id INT, 
        In passtype tinyInt(1),
		IN  name varchar(100),     
        IN  designation varchar(100),        
		IN  office varchar(100), 
		IN  reference1 varchar(100),
		IN  reference2 VARCHAR(100),		
		IN 	issueDate datetime,
        IN 	referenceNo VARCHAR(45),
		IN 	phone varchar(10),
        IN 	passNo int(11),
		in  address1 varchar(255),
        in  address2 varchar(255),
        in  dob datetime,
        in recieptNo varchar(100),
        in fromDate datetime,
        in toDate dateTime,
		OUT returnid INT
)
BEGIN
Declare rowcount Int default 0;
-- --------------------------------------------------------------------------------
-- Used to add/edit a user account
-- --------------------------------------------------------------------------------
START TRANSACTION;
  IF (id = -1) THEN 
		INSERT INTO `gatepass`.`pass` (	
				`pass`.`passType`,
                `pass`.`passNo`,
				 `pass`.`name`,
                 `pass`.`designation`,
                 `pass`.`office`,
                 `pass`.`reference1`,
                 `pass`.`reference2`,
                 `pass`.`issueDate`,
                 `pass`.`referenceNo`,
                 `pass`.`phone`,
                  `pass`.`address1`,
                 `pass`.`address2`,
                 `pass`.`dob`,
                 `pass`.`recieptNo`,
                 `pass`.`fromDate`,
                 `pass`.`toDate`
		)
		values
		(			passtype,
					passNo,
				   name,
                   designation,
                   office,
                   reference1,
                   reference2,
                   issueDate,
                   referenceNo,
                   phone,
                   address1,
                   address2,
                   dob,
                   recieptNo,
                   fromDate,
                   toDate
		); 
   ELSE 
		UPDATE `gatepass`.`pass`
            set `pass`.`passtype` = passType,
                `pass`.`passNo` = passNo,
				 `pass`.`name` = name,
                 `pass`.`designation` = designation,
                 `pass`.`office` = office,
                 `pass`.`reference1` = reference1,
                 `pass`.`reference2` = reference2,
                 `pass`.`issueDate` = issueDate,
                 `pass`.`referenceNo` = referenceNo,
                 `pass`.`phone` = phone,
                  `pass`.`address1` = address1,
                 `pass`.`address2` =address2,
                 `pass`.`dob` = dob,
                 `pass`.`recieptNo` = recieptNo,
                 `pass`.`fromDate` = fromDate,
                 `pass`.`toDate` = toDate
                 
		WHERE `pass`.`id` = id ;   
   END IF;
 
   SET returnid := -1 ;
   IF (id != -1 ) THEN 
       SET returnid := id ; 
   ELSE
         if(ROW_COUNT() > 0) then
            select last_insert_id() as intRecordKey;
            set returnid = last_insert_id();			 
         end if;	 
   END IF;	
   COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `vahanpass_add_edit_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `vahanpass_add_edit_procedure`(
		IN  id INT, 
        In  passType tinyInt(1),
		IN 	passNo int(11),
		IN  name varchar(100),     
        IN  designation varchar(100),        
		IN  office varchar(100), 
		IN  vehicleNo1 varchar(100),
		IN  vehicleNo2 VARCHAR(100),
		IN  vehicleReference1 VARCHAR(100),
        IN  vehicleReference2 VARCHAR(100),
		IN 	issueDate datetime,
        IN 	referenceNo VARCHAR(45),
		OUT returnid INT
)
BEGIN
Declare rowcount Int default 0;
-- --------------------------------------------------------------------------------
-- Used to add/edit a user account
-- --------------------------------------------------------------------------------
START TRANSACTION;
  IF (id = -1) THEN 
		INSERT INTO `gatepass`.`vahanpass` (				   
				`vahanpass`.`passType`,
                `vahanpass`.`passNo`,
                `vahanpass`.`name`,
                `vahanpass`.`designation`,
                `vahanpass`.`office`,
                `vahanpass`.`vehicleNo1`,
                `vahanpass`.`vehicleNo2`,
                `vahanpass`.`vehicleReference1`,
                `vahanpass`.`vehicleReference2`,
                `vahanpass`.`issueDate`,
                `vahanpass`.`referenceNo`
                
		)
		values
		(				 
				passType,
                passNo,
                name,
                designation,
                office,
                vehicleNo1,
                vehicleNo2,
                vehicleReference1,
                vehicleReference2,
                issueDate,
                referenceNo
		); 
   ELSE 
		UPDATE `gatepass`.`vahanpass`
            set  `vahanpass`.`passType`= passType,
                `vahanpass`.`passNo` = passNo,
                `vahanpass`.`name` = name,
                `vahanpass`.`designation` = designation,
                `vahanpass`.`office` = office,
                `vahanpass`.`vehicleNo1` = vehicleNo1,
                `vahanpass`.`vehicleNo2` = vehicleNo2,
                `vahanpass`.`vehicleReference1` = vehicleReference1,
                `vahanpass`.`vehicleReference2` = vehicleReference2,
                `vahanpass`.`issueDate` = issueDate,
                `vahanpass`.`referenceNo` = referenceNo
                 
		WHERE `vahanpass`.`id` = id ;   
   END IF;
 
   SET returnid := -1 ;
   IF (id != -1 ) THEN 
       SET returnid := id ; 
   ELSE
         if(ROW_COUNT() > 0) then
            select last_insert_id() as intRecordKey;
            set returnid = last_insert_id();			 
         end if;	 
   END IF;	
   COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `account_view`
--

/*!50001 DROP VIEW IF EXISTS `account_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`starbull`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `account_view` AS select `a`.`id` AS `id`,`a`.`buildingId` AS `buildingId`,`b`.`eName` AS `buildingEName`,`b`.`hName` AS `buildingHName`,`a`.`departmentId` AS `departmentId`,`c`.`eName` AS `departmentEName`,`c`.`hName` AS `departmentHName`,`a`.`name` AS `name`,`a`.`userId` AS `userId`,`a`.`password` AS `password`,`a`.`email` AS `email`,`a`.`phone` AS `phone`,`a`.`type` AS `type` from ((`account` `a` join `building` `b`) join `department` `c`) where ((`b`.`id` = `a`.`buildingId`) and (`c`.`id` = `a`.`departmentId`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `building_view`
--

/*!50001 DROP VIEW IF EXISTS `building_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `building_view` AS select `building`.`id` AS `id`,`building`.`eName` AS `eName`,`building`.`hName` AS `hName` from `building` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `department_view`
--

/*!50001 DROP VIEW IF EXISTS `department_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `department_view` AS select `department`.`id` AS `id`,`department`.`eName` AS `eName`,`department`.`hName` AS `hName` from `department` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `designation_view`
--

/*!50001 DROP VIEW IF EXISTS `designation_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `designation_view` AS select `designation`.`id` AS `id`,`designation`.`eName` AS `eName`,`designation`.`hName` AS `hName` from `designation` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `officer_view`
--

/*!50001 DROP VIEW IF EXISTS `officer_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `officer_view` AS select `officer`.`id` AS `id`,`officer`.`buildingId` AS `buildingId`,`officer`.`departmentId` AS `departmentId`,`officer`.`designationId` AS `designationId`,`officer`.`floor` AS `floor`,`officer`.`roomNo` AS `roomNo`,`officer`.`name` AS `name`,`officer`.`extention` AS `extention`,`officer`.`phoneOffice` AS `phoneOffice` from `officer` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `pass_view`
--

/*!50001 DROP VIEW IF EXISTS `pass_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `pass_view` AS select `pass`.`id` AS `id`,`pass`.`passtype` AS `passtype`,`pass`.`passNo` AS `passNo`,`pass`.`name` AS `name`,`pass`.`designation` AS `designation`,`pass`.`office` AS `office`,`pass`.`reference1` AS `reference1`,`pass`.`reference2` AS `reference2`,`pass`.`issueDate` AS `issueDate`,`pass`.`referenceNo` AS `referenceNo`,`pass`.`phone` AS `phone`,`pass`.`address1` AS `address1`,`pass`.`address2` AS `address2`,`pass`.`dob` AS `dob`,`pass`.`receiptNo` AS `receiptNo`,`pass`.`fromDate` AS `fromDate`,`pass`.`toDate` AS `toDate` from `pass` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-05 21:43:59
