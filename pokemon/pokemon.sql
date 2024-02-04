-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 04, 2024 at 08:30 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon`
--

-- --------------------------------------------------------

--
-- Table structure for table `pokemon`
--

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL,
  `deck_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pokemon`
--

INSERT INTO `pokemon` (`id`, `deck_id`, `url`, `comment`) VALUES
(10, 2, 'https://pokeapi.co/api/v2/pokemon/6/', 'nu da???'),
(14, 2, 'https://pokeapi.co/api/v2/pokemon/9/', 'asdadasdasd'),
(19, 2, 'https://pokeapi.co/api/v2/pokemon/20/', NULL),
(20, 2, 'https://pokeapi.co/api/v2/pokemon/19/', 'det hade varit enu bätter om det gick nu'),
(23, 2, 'https://pokeapi.co/api/v2/pokemon/15/', 'fungerar det nu mån tro?'),
(24, 2, 'https://pokeapi.co/api/v2/pokemon/11/', 'asdasdadas'),
(31, 2, 'https://pokeapi.co/api/v2/pokemon/7/', NULL),
(32, 2, 'https://pokeapi.co/api/v2/pokemon/6/', NULL),
(33, 2, 'https://pokeapi.co/api/v2/pokemon/9/', NULL),
(34, 2, 'https://pokeapi.co/api/v2/pokemon/5/', 'Jennys favorit\n'),
(36, 0, 'https://pokeapi.co/api/v2/pokemon/5/', NULL),
(37, 0, 'https://pokeapi.co/api/v2/pokemon/5/', NULL),
(39, 1, 'https://pokeapi.co/api/v2/pokemon/2/', 'wogeliboggeli'),
(40, 2, 'https://pokeapi.co/api/v2/pokemon/3/', NULL),
(41, 3, 'https://pokeapi.co/api/v2/pokemon/3/', 'trams'),
(42, 3, 'https://pokeapi.co/api/v2/pokemon/6/', NULL),
(43, 1, 'https://pokeapi.co/api/v2/pokemon/5/', NULL),
(44, 1, 'https://pokeapi.co/api/v2/pokemon/6/', NULL),
(45, 3, 'https://pokeapi.co/api/v2/pokemon/3/', NULL),
(46, 3, 'https://pokeapi.co/api/v2/pokemon/3/', NULL),
(48, 3, 'https://pokeapi.co/api/v2/pokemon/2/', NULL),
(49, 3, 'https://pokeapi.co/api/v2/pokemon/2/', NULL),
(51, 3, 'https://pokeapi.co/api/v2/pokemon/2/', NULL),
(52, 3, 'https://pokeapi.co/api/v2/pokemon/6/', 'wromn'),
(56, 3, 'https://pokeapi.co/api/v2/pokemon/2/', NULL),
(58, 2, 'https://pokeapi.co/api/v2/pokemon/pikachu', NULL),
(59, 3, 'https://pokeapi.co/api/v2/pokemon/pikachu', NULL),
(60, 1, 'https://pokeapi.co/api/v2/pokemon/pikachu', 'pikacho måste vara med!!!'),
(62, 1, 'https://pokeapi.co/api/v2/pokemon/1/', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `poki_deck`
--

CREATE TABLE `poki_deck` (
  `id` int(11) NOT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `poki_deck`
--

INSERT INTO `poki_deck` (`id`, `user_id`, `name`) VALUES
(1, 0xa73012d943a143738c0ca8241f688c6b, 'deck 1'),
(2, 0xa73012d943a143738c0ca8241f688c6b, 'deck 2'),
(3, 0xa73012d943a143738c0ca8241f688c6b, 'deck 3'),
(6, 0xa73012d943a143738c0ca8241f688c6b, 'hittepå');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` binary(16) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `password`, `username`) VALUES
(0xa73012d943a143738c0ca8241f688c6b, 'Mathias', 'Brynolf', '$2a$10$N1.LrxRG5phnFW9VrH.g..1E7/uL9j35ryjeFQpGOTXrDjwKg7W5u', 'mathias'),
(0xde303984683f49dead4b94a86876b515, 'jenny', 'Hellqvist', '$2a$10$/E3.dJL7BW8nYl.L6ZgP7uDdckKUnfZZ24ehaU867XPDGMgfVTcKy', 'jenny');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pokemon`
--
ALTER TABLE `pokemon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `poki_deck`
--
ALTER TABLE `poki_deck`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pokemon`
--
ALTER TABLE `pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `poki_deck`
--
ALTER TABLE `poki_deck`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
