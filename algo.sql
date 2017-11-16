-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2017 a las 14:07:15
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `algo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncio`
--

CREATE TABLE `anuncio` (
  `idanuncio` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `nombreproducto` varchar(30) NOT NULL,
  `categoria` varchar(40) NOT NULL,
  `resumen` varchar(30) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `precio` float NOT NULL,
  `fechaanuncio` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `anuncio`
--

INSERT INTO `anuncio` (`idanuncio`, `iduser`, `nombreproducto`, `categoria`, `resumen`, `descripcion`, `precio`, `fechaanuncio`) VALUES
(3, 1, 'balon futbol', 'deportes', 'balon de futbol de reglamento', '', 9, '2017-11-10'),
(4, 1, 'camisa', 'ropa', 'camisa negra muy chula', 'de buen material hecho en taiwan esclavizando a niños hasta su muerte', 15, '2017-11-06'),
(5, 1, 'casco de moto', 'accesorios', 'casco noland para moto azul', 'esta usado pero en buen estado', 30, '2017-11-07'),
(6, 1, 'mueble bar', 'muebles', 'con botellas incluidas', 'magnifico mueble bar con varias botellas a medio beber incluidas en el precio', 71.55, '2017-11-07'),
(7, 1, 'Equipación Curling', 'deportes', 'casi sin usar', 'lo vendo porque no lo uso, es una caca de deporte', 80, '2017-11-09'),
(8, 1, 'Equipación Curling', 'deportes', 'casi sin usar', 'lo vendo porque no lo uso, es una caca de deporte', 80, '2017-11-12'),
(10, 2, 'Bufanda', 'ropa', 'de lana', 'de lana negra, de oveja lacha', 15.5, '2017-11-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotografia`
--

CREATE TABLE `fotografia` (
  `idfoto` int(11) NOT NULL,
  `iddelanuncio` int(11) NOT NULL,
  `urlfoto` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fotografia`
--

INSERT INTO `fotografia` (`idfoto`, `iddelanuncio`, `urlfoto`) VALUES
(10, 3, 'balon.jpg'),
(15, 3, 'ruta.de-la-foto11.jpg'),
(16, 3, 'ruta.de-la-foto16.jpg'),
(17, 3, 'ruta.de-la-foto17.jpg'),
(18, 3, 'ruta.de-la-foto18.jpg'),
(19, 3, 'ruta.de-la-foto19.jpg'),
(20, 3, 'ruta.de-la-foto20.jpg'),
(21, 3, 'ruta.de-la-foto21.jpg'),
(22, 4, 'fotocamisa1'),
(23, 4, 'ruta.de-la-foto23.jpg'),
(24, 4, 'ruta.de-la-foto24.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(10) NOT NULL,
  `alias` varchar(10) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido1` varchar(15) NOT NULL,
  `apellido2` varchar(15) NOT NULL,
  `calle` varchar(25) NOT NULL,
  `localidad` varchar(25) NOT NULL,
  `provincia` varchar(25) NOT NULL,
  `codigopostal` varchar(5) NOT NULL,
  `telefono1` varchar(9) NOT NULL,
  `telefono2` varchar(9) DEFAULT NULL,
  `fecharegistro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `email`, `password`, `alias`, `nombre`, `apellido1`, `apellido2`, `calle`, `localidad`, `provincia`, `codigopostal`, `telefono1`, `telefono2`, `fecharegistro`) VALUES
(1, 'dani@gmail.com', 'aaa', 'dani', 'daniel', 'garcia', 'requena', 'estella 19', 'vitoria-gasteiz', 'araba', '01010', '620603900', NULL, '2017-11-02'),
(2, 'ifonselgrande@i', 'ifons', 'Ifons', 'Alfons', 'Nose', 'Nomeacuerdo', 'La Calle de Alfonso', 'Miranda de Ebro', 'Burgos', '09200', '666666667', NULL, '2017-11-10'),
(6, 'pepe.fernandez@ikasle.egibide.org', 'aaa', 'pepe', 'Pepe', 'Fernandez', 'Diaz', 'calle falsa 123', 'vitoria', 'alava', '01005', '945000000', '600000000', '2017-11-13'),
(10, 'uu.ii@ikasle.egibide.org', 'ccc', 'mertxe', 'were', 'Hernandez', 'Hernandez', 'El Rio 19 2A', 'Eskoriatza', 'Gipuzkoa', '20110', '657833190', '943987987', '2017-11-16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anuncio`
--
ALTER TABLE `anuncio`
  ADD PRIMARY KEY (`idanuncio`),
  ADD KEY `AN-IU-FK` (`iduser`);

--
-- Indices de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD PRIMARY KEY (`idfoto`),
  ADD KEY `FO-IA-FK` (`iddelanuncio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`),
  ADD UNIQUE KEY `US-EM-UN` (`email`),
  ADD UNIQUE KEY `US-AL-UN` (`alias`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anuncio`
--
ALTER TABLE `anuncio`
  MODIFY `idanuncio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `fotografia`
--
ALTER TABLE `fotografia`
  MODIFY `idfoto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `anuncio`
--
ALTER TABLE `anuncio`
  ADD CONSTRAINT `AN-IU-FK` FOREIGN KEY (`iduser`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `fotografia`
--
ALTER TABLE `fotografia`
  ADD CONSTRAINT `FO-IA-FK` FOREIGN KEY (`iddelanuncio`) REFERENCES `anuncio` (`idanuncio`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
