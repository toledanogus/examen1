-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-10-2021 a las 23:45:48
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `toledanok`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen1`
--

CREATE TABLE `examen1` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `antitrampa` int(2) NOT NULL,
  `espP` float NOT NULL,
  `mateP` float NOT NULL,
  `cnP` float NOT NULL,
  `hisP` float NOT NULL,
  `geoP` float NOT NULL,
  `forP` float NOT NULL,
  `e1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e5` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e6` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e7` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e8` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e9` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e10` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e11` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e12` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e13` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `e14` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m5` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m6` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m7` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m8` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m9` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m10` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m11` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `m12` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn5` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn6` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn7` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn8` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn9` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn10` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn11` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn12` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn13` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cn14` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi5` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi6` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi7` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi8` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi9` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi10` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `hi11` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge5` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge6` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge7` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge8` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ge9` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `fo1` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `fo2` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `fo3` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `fo4` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `fo5` varchar(200) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `examen1`
--

INSERT INTO `examen1` (`id`, `nombre`, `apellidos`, `antitrampa`, `espP`, `mateP`, `cnP`, `hisP`, `geoP`, `forP`, `e1`, `e2`, `e3`, `e4`, `e5`, `e6`, `e7`, `e8`, `e9`, `e10`, `e11`, `e12`, `e13`, `e14`, `m1`, `m2`, `m3`, `m4`, `m5`, `m6`, `m7`, `m8`, `m9`, `m10`, `m11`, `m12`, `cn1`, `cn2`, `cn3`, `cn4`, `cn5`, `cn6`, `cn7`, `cn8`, `cn9`, `cn10`, `cn11`, `cn12`, `cn13`, `cn14`, `hi1`, `hi2`, `hi3`, `hi4`, `hi5`, `hi6`, `hi7`, `hi8`, `hi9`, `hi10`, `hi11`, `ge1`, `ge2`, `ge3`, `ge4`, `ge5`, `ge6`, `ge7`, `ge8`, `ge9`, `fo1`, `fo2`, `fo3`, `fo4`, `fo5`) VALUES
(14, 'Gustavo', 'Toledano', 1, 2.14286, 5.83333, 0.714286, 4.54545, 6.66667, 10, '¿Cómo estás', 'Qué comiste hoy.', '¡Hola!', 'Una tabla para obtener información.', 'Saltar', '¿Cuáles son las capas de la Tierra?', 'El sabor favorito es el de fresa.', 'Gordo, inteligente, de pies chicos.', 'Gordo, inteligente, de pies chicos.', 'Nos indica cómo es una persona, animal o cosa.', 'Hoy es un día bonito.', 'zap', 'Ofrecen varias opciones de respuesta y sólo una es correcta.', 'Hacer ejercicio.', '73', '416', '120', '56.00', '9.6', 'Centro', 'Cuerda', '8/5', '1000', '24m.', '0.7', '3,350,000,000', 'Lavadora', 'Una batería de automóvil.', 'La madera.', 'Un buen conductor de la electricidad.', 'Es una fuente de energía eléctrica.', 'Calor.', 'Convección.', 'La luna es un planeta.', 'Movimiento polar.', 'Manómetro.', 'Cartílago', 'Esternocleidomastoideo.', 'Hipotálamo.', 'Tálamo', 'Alta demanda de viviendas y servicios públicos.', 'Utilizar el poder para realizar obras públicas.', 'La venta de teléfonos celulares.', 'Uso de recursos de forma moderada, de tal forma que no se terminen.', 'Para hacer lo que nosotros queramos.', 'El paleolítico.', 'Cuando los seres humanos vivían en lugares fijos.', 'La creación de herramientas de piedra.', 'Homo sapiens sapiens.', 'Por el lenguaje de señas.', 'África', 'Las zonas rurales.', 'La contaminación.', 'Riesgo.', 'Reforestación', 'Reforestación', 'América', 'Europa', 'Escala mundial.', 'África', 'Tiene ideas y las lleva a cabo.', 'El derecho para elegir libremente a sus gobernantes.', 'Juanito gana el mismo dinero que Lucía por hacer el mismo trabajo.', 'No sé qué elegir, si jugar futbol o basquetbol.', 'Establecer un orden de importancia a las cosas.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `examen1`
--
ALTER TABLE `examen1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `examen1`
--
ALTER TABLE `examen1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
