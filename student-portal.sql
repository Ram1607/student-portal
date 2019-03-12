-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 12, 2019 at 06:53 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student-portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `sl` int(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `f_name` varchar(150) NOT NULL,
  `m_name` varchar(150) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `reg_no` varchar(100) NOT NULL,
  `roll_no` varchar(100) NOT NULL,
  `department` varchar(50) NOT NULL,
  `marks_10` int(100) NOT NULL,
  `marks_12` int(100) NOT NULL,
  `cgpa` int(100) NOT NULL,
  `contact` bigint(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `per_address` varchar(250) NOT NULL,
  `cor_address` varchar(250) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`sl`, `name`, `f_name`, `m_name`, `dob`, `gender`, `nationality`, `reg_no`, `roll_no`, `department`, `marks_10`, `marks_12`, `cgpa`, `contact`, `email`, `per_address`, `cor_address`, `password`) VALUES
(1, 'ksukasbk', '', '', '2015', 0, 'wjkhdskjwdb', 'jwdkbwh', 'snbwks', 'Information Technology', 87, 98, 8, 454, 'sjdkfh@jsdc.com', 'jdjbe', 'kjqedkeq', 'wkjdb'),
(2, 'Pradum', '', '', '2015', 0, 'Indian', 'jsandja', 'jlsndfljnsf', 'Information Technology', 86, 94, 9, 7979070927, 'pradumkumar123@gmail.com', 'djacnlja', 'ajsndals', 'lsajdn'),
(3, 'sdfljsn', 'jlnfljn', 'jlnlnlj', '2015', 0, 'oidfvon', 'kjdfljqef', 'nljwdnljw', 'Information Technology', 74, 85, 9, 9824238043, 'pradumkumar123@gmail.com', '.sancanc', 'jlefnlkn', 'jwlfnn');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `SL` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '"1:admin 0:student"'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`SL`, `username`, `password`, `type`) VALUES
(1, 'pradum', 'abc', 1),
(2, 'sai', 'ram', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`sl`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`SL`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `sl` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `SL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
