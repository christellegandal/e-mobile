-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 04 nov. 2019 à 15:57
-- Version du serveur :  5.7.24
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e-mobile`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
CREATE TABLE IF NOT EXISTS `annonce` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prix` int(11) NOT NULL,
  `marque` varchar(160) NOT NULL,
  `nom` varchar(160) NOT NULL,
  `photo` varchar(160) NOT NULL,
  `description` text NOT NULL,
  `couleur` varchar(160) NOT NULL,
  `datePublication` datetime NOT NULL,
  `categorie` varchar(160) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`id`, `prix`, `marque`, `nom`, `photo`, `description`, `couleur`, `datePublication`, `categorie`) VALUES
(5, 400, 'Apple', 'Iphone4', 'assets/images/photo3.jpg', 'chic', 'doré', '2019-11-04 13:44:56', 'annonce'),
(2, 600, 'Apple', 'Iphone6', 'assets/images/photo1.jpg', 'va avec tout', 'blanc', '2019-11-04 13:38:08', 'annonce'),
(3, 600, 'Apple', 'Iphone5', 'assets/images/photo2.jpg', 'sobre', 'blanc', '2019-11-04 13:41:00', 'annonce'),
(6, 300, 'Apple', 'Iphone6', 'assets/images/photo4.jpg', 'bon rapport qualité/prix', 'gris', '2019-11-04 14:00:10', 'annonce'),
(7, 300, 'Apple', 'Iphone6', 'assets/images/photo4.jpg', 'silver', 'gris', '2019-11-04 14:07:30', 'annonce');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
