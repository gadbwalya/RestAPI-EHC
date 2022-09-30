-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 30, 2022 at 02:56 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectsdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `contractor` varchar(300) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `areacode` varchar(20) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `budget` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `contractor`, `location`, `areacode`, `status`, `budget`) VALUES
(1, 'Foundation of hope', 'Ehc', 'Lusaka', '1144', 'In-Progress', 2300),
(2, 'computers Project', 'Ehc Data', 'Lusaka Ehc', '1145', 'In-Progress', 4000),
(3, 'New Testing project', 'EHC Rest API group', 'Lusaka Ehc', '1149', 'In-Progress', 4500),
(4, 'New Testing project', 'EHC Rest API group', 'Lusaka Ehc', '1149', 'In-Progress', 4500),
(5, 'Here We go for some Testing', 'EHC Group Code API', 'Lusaka Ehc', '1150', 'In-Progress', 4500),
(6, 'Title Testing', 'DB Rest API Test', 'Lusaka Ehc', '1190', 'In-Progress', 9000),
(7, 'Title Testing Second', 'DB Rest API Test 2', 'Lusaka Ehc', '1187', 'Done', 1100),
(8, 'Title Testing Second', 'DB Rest API Test 2', 'Lusaka Ehc', '1187', 'Done', 1100);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
