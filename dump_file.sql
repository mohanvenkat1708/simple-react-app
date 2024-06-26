-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sago
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `bill_id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `payment_status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `purchase_id` (`purchase_id`),
  CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchase` (`purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billitems`
--

DROP TABLE IF EXISTS `billitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billitems` (
  `bill_item_id` int NOT NULL AUTO_INCREMENT,
  `bill_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`bill_item_id`),
  KEY `bill_id` (`bill_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `billitems_ibfk_1` FOREIGN KEY (`bill_id`) REFERENCES `bill` (`bill_id`),
  CONSTRAINT `billitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `productinventory` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billitems`
--

LOCK TABLES `billitems` WRITE;
/*!40000 ALTER TABLE `billitems` DISABLE KEYS */;
/*!40000 ALTER TABLE `billitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `variety` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartitems`
--

DROP TABLE IF EXISTS `cartitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartitems` (
  `cart_item_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `product_id` (`product_id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `cartitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `varieties` (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartitems`
--

LOCK TABLES `cartitems` WRITE;
/*!40000 ALTER TABLE `cartitems` DISABLE KEYS */;
INSERT INTO `cartitems` VALUES (9,9,1,2,70),(14,10,2,1,90),(15,10,3,15,120),(18,11,2,5,90),(19,11,3,3,120),(20,16,2,2,90),(29,20,2,7,90),(30,19,3,5,120),(31,19,1,3,70);
/*!40000 ALTER TABLE `cartitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `order_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity` int DEFAULT NULL,
  `product_total_cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `varieties` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,2,19,'2024-05-06 07:12:17',3,270.00),(2,2,2,19,'2024-05-06 11:08:28',3,270.00),(3,3,2,20,'2024-05-07 03:48:00',7,630.00),(4,4,3,19,'2024-05-07 04:23:35',5,600.00),(5,5,3,19,'2024-05-07 04:26:41',5,600.00),(6,6,3,19,'2024-05-07 04:27:57',5,600.00),(7,7,3,19,'2024-05-07 04:29:34',5,600.00),(8,8,3,19,'2024-05-07 04:33:01',5,600.00),(9,9,3,19,'2024-05-07 04:34:24',5,600.00),(10,10,3,19,'2024-05-07 04:49:07',5,600.00),(11,11,3,19,'2024-05-07 04:49:45',5,600.00),(12,12,3,19,'2024-05-07 04:51:28',5,600.00),(13,13,3,19,'2024-05-07 05:03:55',5,600.00),(14,14,3,19,'2024-05-07 05:04:31',5,600.00),(15,15,3,19,'2024-05-07 05:10:02',5,600.00),(16,16,3,19,'2024-05-07 06:57:08',5,600.00),(17,17,3,19,'2024-05-07 07:05:29',5,600.00),(18,18,3,19,'2024-05-07 07:05:58',5,600.00),(19,18,1,19,'2024-05-07 07:05:58',3,210.00),(20,19,1,19,'2024-05-07 07:24:06',3,210.00),(21,19,3,19,'2024-05-07 07:24:06',5,600.00),(22,20,3,19,'2024-05-07 07:28:52',5,600.00),(23,20,1,19,'2024-05-07 07:28:52',3,210.00),(24,21,3,19,'2024-05-07 07:29:20',5,600.00),(25,21,1,19,'2024-05-07 07:29:20',3,210.00),(26,22,3,19,'2024-05-07 07:30:01',5,600.00),(27,22,1,19,'2024-05-07 07:30:01',3,210.00),(28,23,1,19,'2024-05-07 07:32:05',3,210.00),(29,23,3,19,'2024-05-07 07:32:05',5,600.00),(30,24,3,19,'2024-05-07 07:36:11',5,600.00),(31,24,1,19,'2024-05-07 07:36:11',3,210.00),(32,25,3,19,'2024-05-07 07:36:28',5,600.00),(33,25,1,19,'2024-05-07 07:36:28',3,210.00),(34,26,3,19,'2024-05-07 07:37:26',5,600.00),(35,26,1,19,'2024-05-07 07:37:26',3,210.00),(36,27,1,19,'2024-05-07 07:37:49',3,210.00),(37,27,3,19,'2024-05-07 07:37:49',5,600.00),(38,28,3,19,'2024-05-07 07:37:57',5,600.00),(39,28,1,19,'2024-05-07 07:37:57',3,210.00),(40,29,1,19,'2024-05-07 07:40:36',3,210.00),(41,29,3,19,'2024-05-07 07:40:36',5,600.00),(42,30,3,19,'2024-05-07 07:41:35',5,600.00),(43,30,1,19,'2024-05-07 07:41:35',3,210.00),(44,31,3,19,'2024-05-07 07:44:25',5,600.00),(45,31,1,19,'2024-05-07 07:44:25',3,210.00),(46,32,3,19,'2024-05-07 07:45:07',5,600.00),(47,32,1,19,'2024-05-07 07:45:07',3,210.00),(48,33,1,19,'2024-05-07 07:48:42',3,210.00),(49,33,3,19,'2024-05-07 07:48:42',5,600.00),(50,34,3,19,'2024-05-07 07:52:51',5,600.00),(51,34,1,19,'2024-05-07 07:52:51',3,210.00),(52,35,1,19,'2024-05-07 07:54:52',3,210.00),(53,35,3,19,'2024-05-07 07:54:52',5,600.00),(54,36,3,19,'2024-05-07 07:55:14',5,600.00),(55,36,1,19,'2024-05-07 07:55:14',3,210.00),(56,37,1,19,'2024-05-07 07:57:08',3,210.00),(57,37,3,19,'2024-05-07 07:57:08',5,600.00),(58,38,3,19,'2024-05-07 07:59:46',5,600.00),(59,38,1,19,'2024-05-07 07:59:46',3,210.00),(60,39,1,19,'2024-05-07 08:05:21',3,210.00),(61,39,3,19,'2024-05-07 08:05:21',5,600.00),(62,40,1,19,'2024-05-07 08:05:23',3,210.00),(63,40,3,19,'2024-05-07 08:05:23',5,600.00),(64,41,3,19,'2024-05-07 08:07:56',5,600.00),(65,41,1,19,'2024-05-07 08:07:56',3,210.00),(66,42,3,19,'2024-05-07 08:09:52',5,600.00),(67,42,1,19,'2024-05-07 08:09:52',3,210.00),(68,43,3,19,'2024-05-07 08:12:43',5,600.00),(69,43,1,19,'2024-05-07 08:12:43',3,210.00),(70,44,3,19,'2024-05-07 08:18:59',5,600.00),(71,44,1,19,'2024-05-07 08:18:59',3,210.00),(72,45,3,19,'2024-05-07 08:20:07',5,600.00),(73,45,1,19,'2024-05-07 08:20:07',3,210.00),(74,46,3,19,'2024-05-07 08:23:45',5,600.00),(75,46,1,19,'2024-05-07 08:23:45',3,210.00),(76,47,3,19,'2024-05-07 08:26:39',5,600.00),(77,47,1,19,'2024-05-07 08:26:39',3,210.00),(78,48,3,19,'2024-05-07 08:28:17',5,600.00),(79,48,1,19,'2024-05-07 08:28:17',3,210.00),(80,49,3,19,'2024-05-07 08:34:42',5,600.00),(81,49,1,19,'2024-05-07 08:34:42',3,210.00),(82,50,3,19,'2024-05-07 08:38:02',5,600.00),(83,50,1,19,'2024-05-07 08:38:02',3,210.00),(84,51,3,19,'2024-05-07 08:42:26',5,600.00),(85,51,1,19,'2024-05-07 08:42:26',3,210.00),(86,52,1,19,'2024-05-07 08:44:59',3,210.00),(87,52,3,19,'2024-05-07 08:44:59',5,600.00),(88,53,3,19,'2024-05-07 08:46:29',5,600.00),(89,53,1,19,'2024-05-07 08:46:29',3,210.00),(90,54,3,19,'2024-05-07 08:50:37',5,600.00),(91,54,1,19,'2024-05-07 08:50:37',3,210.00);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productinventory`
--

DROP TABLE IF EXISTS `productinventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productinventory` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `variety` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity_available` int DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productinventory`
--

LOCK TABLES `productinventory` WRITE;
/*!40000 ALTER TABLE `productinventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `productinventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `purchase_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `cart_id` int DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `delivery_status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`purchase_id`),
  KEY `user_id` (`user_id`),
  KEY `cart_id` (`cart_id`),
  CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `purchase_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queries`
--

DROP TABLE IF EXISTS `queries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queries`
--

LOCK TABLES `queries` WRITE;
/*!40000 ALTER TABLE `queries` DISABLE KEYS */;
INSERT INTO `queries` VALUES (1,'Mohanraj','mohanrajvs.21it@kongu.edu','hi'),(2,'Hrithik','hrithikkumar@gmail.com','I need some goods, so i wanna discuss with you.\n'),(3,'cheran','cherans.21@kongu.edu','hi'),(4,'sam','fabu.21it@kongu.edu','hello!');
/*!40000 ALTER TABLE `queries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `reviewContent` text,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `varieties` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,'Ram',3.50,'qwerty'),(2,1,'dharma',2.00,'good'),(3,1,'dharma',2.00,'good'),(4,3,'dharma',2.00,'good enough'),(5,2,'kapil',4.00,'i like this'),(6,1,'elango',5.00,'good taste'),(7,1,'fabu',3.70,'Great Taste'),(8,1,'Mohan Babu',3.90,'Good to serve'),(9,1,'Mohan Babu',3.90,'Good to serve'),(10,3,'ashraf',3.00,'Nice'),(11,3,'Mohanraj',4.00,'I like the product very much!!'),(12,2,'Guru Prasad B C',5.00,'The quality of the product is very good and the taste is very nice.'),(13,2,'Hrithik',5.00,'this product is so good and i feel it is value for money.'),(14,2,'mohan',4.00,'Product is good'),(18,2,'babu',3.00,'good');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `usertype` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'Mohanraj','$2b$10$1OeS3/V4J4sKro3AKMb10OYfMya0Zv9tmagWffzZvlPxENDNXoKW6','9361431001','mohanvenkat1708@gmail.com','retail'),(10,'Hrithik','$2b$10$ogcAK1M0zR3N8IeJBdKqAebCnqJgKFOIHsD8MOL/KdOqKOAJfFcye','6382375243','hrithikkumar@gmail.com','retail'),(11,'Jithin','$2b$10$X7G580GJwzeiLaG5Z1QKoOPvR93tI3xusAhP47wwz1fhvybx0orwS','8667252654','jithin@gmail.com','retail'),(14,'babu','$2b$10$nl4x8zlzx6.QL50fT6f76.eGjK2fCX.OinoTbC4saw3I1XfjzuHI2','1234567890','fabu.21it@kongu.edu','retail'),(15,'cheran','$2b$10$PTIwzv8KP6armgRqpYQg5e1efJPoXl1VMiThModbm3VkwOm9ZD0ky','0987654321','cherans.21it@kongu.edu','wholesale'),(16,'cheran','$2b$10$bYQtWddF3Gmx7fsimLdXLul80poI.WpbTks1mbylXm6phyBKWPwY.','+91 9475484429','cherans.21@kongu.edu','retail'),(17,'mohan','$2b$10$8PIkJodY3La0kIy3nMGYFOmwF8.rZoGNslCU5w8VK39uiKEXPfb5C','9361431001','mohan@gmail.com','wholesale'),(18,'kavin','$2b$10$vSND00sWUNdX5noCra/fXeW7HnmuZT/Vha8PuVY5dEeztyBimtQ.a','123456789','kavin@gmail.ccom','retail'),(19,'raj','$2b$10$qSRiruUUyWIc6MLsXieSke.L31iZXutAuBUZoVf9sqThFWAZQubT.','6382375243','raj@gmail.com','admin'),(20,'Ashwath','$2b$10$NBa6.syltaPji24VQ9tFTOumFdcHuOhmyH0DI8kALpbsL/sewoXbG','0987654321','ashwath@gmail.com','wholesale');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varieties`
--

DROP TABLE IF EXISTS `varieties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `varieties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `numRatings` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `reducedPrice` decimal(10,2) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `offer` varchar(255) DEFAULT NULL,
  `about` text,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (1,'Variety 1','sago1.jpeg',3.4,100,101.00,70.00,34,'Buy more than 3 kg, get 30% off','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',297),(2,'Variety 2','sago2.jpeg',4.1,127,120.00,90.00,25,'Buy more than 3 kg, get 25% off','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',50),(3,'Variety 3','sago3.jpeg',3.0,83,150.00,120.00,20,'Buy more than 3 kg, get 20% off','Lorem ipsum dolor sit amet, consectetur adipiscing elit.',495);
/*!40000 ALTER TABLE `varieties` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-13 23:21:55
