-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2023 at 04:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abhaco`
--

-- --------------------------------------------------------

--
-- Table structure for table `movements`
--

CREATE TABLE `movements` (
  `idMovement` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `type` enum('In','Out') COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateMovement` date NOT NULL,
  `units` int(11) NOT NULL DEFAULT 1,
  `value` int(11) NOT NULL DEFAULT 0,
  `total` int(11) GENERATED ALWAYS AS (`units` * `value`) STORED,
  `state` int(11) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movements`
--

INSERT INTO `movements` (`idMovement`, `idUser`, `type`, `description`, `dateMovement`, `units`, `value`, `state`, `dateCreated`) VALUES
(1, 2, 'In', 'Venta de Servicios Especiales', '2023-04-01', 2, 250000, 1, '2023-04-09 03:36:01'),
(2, 2, 'Out', 'Pago Hora Especialista', '2023-04-01', 2, 100000, 1, '2023-04-09 03:36:07'),
(3, 3, 'In', 'Venta de Matera Personalizada', '2023-04-02', 40, 25000, 0, '2023-04-09 01:38:30'),
(4, 3, 'Out', 'Pago Productos para Matera Personalizada', '2023-04-01', 50, 10000, 0, '2023-04-09 01:38:30'),
(5, 4404383, 'In', 'Venta de Coleccion de Dinosauros', '2023-04-04', 1, 2500000, 0, '2023-04-09 01:41:07'),
(6, 4404383, 'Out', 'Adquisición de Coleccion de Dinos', '2023-04-04', 1, 2000000, 0, '2023-04-09 01:41:07'),
(7, 2, 'In', 'Pago de salario', '2023-04-01', 1, 5000, 0, '2023-04-09 04:21:04'),
(8, 2, 'Out', 'Compra de equipo de oficina', '2023-04-01', 1, 10000, 0, '2023-04-09 04:21:04'),
(9, 3, 'In', 'Transferencia de fondos', '2023-04-02', 1, 75000, 0, '2023-04-09 04:21:04'),
(10, 3, 'Out', 'Pago de renta', '2023-04-02', 1, 15000, 0, '2023-04-09 04:21:04'),
(11, 4404383, 'In', 'Venta de Coleccion de Sellos', '2023-04-03', 1, 100000, 0, '2023-04-09 04:21:04'),
(12, 4404383, 'Out', 'Compra de Arte Contemporáneo', '2023-04-03', 1, 500000, 0, '2023-04-09 04:21:04'),
(13, 2, 'In', 'Pago de honorarios', '2023-04-05', 1, 20000, 0, '2023-04-09 04:21:04'),
(14, 2, 'Out', 'Compra de mobiliario', '2023-04-05', 1, 15000, 0, '2023-04-09 04:21:04'),
(15, 3, 'In', 'Transferencia de fondos', '2023-04-06', 1, 50000, 0, '2023-04-09 04:21:04'),
(16, 3, 'Out', 'Pago de tarjeta de crédito', '2023-04-06', 1, 10000, 0, '2023-04-09 04:21:04'),
(17, 4404383, 'In', 'Venta de Oro', '2023-04-07', 1, 500000, 0, '2023-04-09 04:21:04'),
(18, 4404383, 'Out', 'Compra de Inmueble', '2023-04-07', 1, 1000000, 0, '2023-04-09 04:21:04'),
(19, 2, 'In', 'Pago de salario', '2023-01-01', 1, 5000, 0, '2023-04-09 04:21:29'),
(20, 2, 'Out', 'Compra de equipo de oficina', '2023-01-15', 1, 10000, 0, '2023-04-09 04:21:29'),
(21, 3, 'In', 'Transferencia de fondos', '2023-02-02', 1, 75000, 0, '2023-04-09 04:21:29'),
(22, 3, 'Out', 'Pago de renta', '2023-02-15', 1, 15000, 0, '2023-04-09 04:21:29'),
(23, 4404383, 'In', 'Venta de Coleccion de Sellos', '2023-03-03', 1, 100000, 0, '2023-04-09 04:21:29'),
(24, 4404383, 'Out', 'Compra de Arte Contemporáneo', '2023-03-15', 1, 500000, 0, '2023-04-09 04:21:29'),
(25, 2, 'In', 'Pago de honorarios', '2023-04-01', 1, 20000, 0, '2023-04-09 04:21:29'),
(26, 2, 'Out', 'Compra de mobiliario', '2023-04-05', 1, 15000, 0, '2023-04-09 04:21:29'),
(27, 3, 'In', 'Transferencia de fondos', '2023-04-06', 1, 50000, 0, '2023-04-09 04:21:29'),
(28, 3, 'Out', 'Pago de tarjeta de crédito', '2023-04-07', 1, 10000, 0, '2023-04-09 04:21:29'),
(29, 4404383, 'In', 'Venta de Oro', '2023-04-08', 1, 500000, 0, '2023-04-09 04:21:29'),
(30, 4404383, 'Out', 'Compra de Inmueble', '2023-04-08', 1, 1000000, 0, '2023-04-09 04:21:29'),
(31, 4404383, 'In', 'Venta de Acciones', '2023-04-09', 1, 80000, 0, '2023-04-09 04:22:53'),
(32, 4404383, 'Out', 'Pago de Impuestos', '2023-04-10', 1, 100000, 0, '2023-04-09 04:22:53'),
(33, 2, 'In', 'Pago de salario', '2023-04-11', 1, 5000, 0, '2023-04-09 04:22:53'),
(34, 2, 'Out', 'Compra de material de oficina', '2023-04-12', 1, 5000, 0, '2023-04-09 04:22:53'),
(35, 3, 'In', 'Transferencia de fondos', '2023-04-13', 1, 20000, 0, '2023-04-09 04:22:53'),
(36, 3, 'Out', 'Pago de servicios públicos', '2023-04-14', 1, 5000, 0, '2023-04-09 04:22:53'),
(37, 4404383, 'In', 'Cobro de Factura', '2023-04-15', 1, 50000, 0, '2023-04-09 04:22:53'),
(38, 4404383, 'Out', 'Pago de Propiedades', '2023-04-16', 1, 200000, 0, '2023-04-09 04:22:53'),
(39, 2, 'In', 'Pago de honorarios', '2023-04-17', 1, 10000, 0, '2023-04-09 04:22:53'),
(40, 2, 'Out', 'Compra de equipo de computación', '2023-04-18', 1, 20000, 0, '2023-04-09 04:22:53'),
(41, 3, 'In', 'Transferencia de fondos', '2023-04-19', 1, 30000, 0, '2023-04-09 04:22:53'),
(42, 3, 'Out', 'Pago de cuota de préstamo', '2023-04-20', 1, 10000, 0, '2023-04-09 04:22:53'),
(43, 4404383, 'In', 'Cobro de Alquiler', '2023-04-21', 1, 25000, 0, '2023-04-09 04:22:53'),
(44, 4404383, 'Out', 'Compra de Joyas', '2023-04-22', 1, 150000, 0, '2023-04-09 04:22:53'),
(45, 2, 'In', 'Pago de salario', '2023-04-23', 1, 5000, 0, '2023-04-09 04:22:53'),
(46, 2, 'Out', 'Compra de suministros de limpieza', '2023-04-24', 1, 3000, 0, '2023-04-09 04:22:53'),
(47, 3, 'In', 'Transferencia de fondos', '2023-04-25', 1, 40000, 0, '2023-04-09 04:22:53'),
(48, 3, 'Out', 'Pago de suscripción de televisión', '2023-04-26', 1, 2000, 0, '2023-04-09 04:22:53'),
(49, 4404383, 'In', 'Venta de coche', '2023-04-27', 1, 300000, 0, '2023-04-09 04:22:53'),
(50, 4404383, 'Out', 'Pago de hipoteca', '2023-04-28', 1, 400000, 0, '2023-04-09 04:22:53'),
(51, 4404383, 'In', 'Cobro de Alquiler', '2023-01-15', 1, 15000, 0, '2023-04-09 04:25:18'),
(52, 4404383, 'Out', 'Pago de Propiedades', '2023-01-20', 1, 120000, 0, '2023-04-09 04:25:18'),
(53, 2, 'In', 'Pago de salario', '2023-02-01', 1, 4000, 0, '2023-04-09 04:25:18'),
(54, 2, 'Out', 'Compra de material de oficina', '2023-02-05', 1, 3000, 0, '2023-04-09 04:25:18'),
(55, 3, 'In', 'Transferencia de fondos', '2023-03-10', 1, 18000, 0, '2023-04-09 04:25:18'),
(56, 3, 'Out', 'Pago de servicios públicos', '2023-03-15', 1, 4000, 0, '2023-04-09 04:25:18'),
(57, 4404383, 'In', 'Cobro de Factura', '2023-03-20', 1, 30000, 0, '2023-04-09 04:25:18'),
(58, 4404383, 'Out', 'Pago de Propiedades', '2023-03-25', 1, 100000, 0, '2023-04-09 04:25:18'),
(59, 2, 'In', 'Pago de salario', '2023-04-01', 1, 5000, 0, '2023-04-09 04:25:18'),
(60, 2, 'Out', 'Compra de equipo de computación', '2023-04-05', 1, 12000, 0, '2023-04-09 04:25:18'),
(61, 3, 'In', 'Transferencia de fondos', '2023-04-08', 1, 20000, 0, '2023-04-09 04:25:18'),
(62, 3, 'Out', 'Pago de cuota de préstamo', '2023-04-10', 1, 7000, 0, '2023-04-09 04:25:18'),
(63, 4404383, 'In', 'Cobro de Alquiler', '2023-04-15', 1, 20000, 0, '2023-04-09 04:25:18'),
(64, 4404383, 'Out', 'Compra de Joyas', '2023-04-20', 1, 80000, 0, '2023-04-09 04:25:18'),
(65, 2, 'In', 'Pago de salario', '2023-04-25', 1, 6000, 0, '2023-04-09 04:25:18'),
(66, 2, 'Out', 'Compra de suministros de limpieza', '2023-04-30', 1, 5000, 0, '2023-04-09 04:25:18'),
(67, 3, 'In', 'Transferencia de fondos', '2023-05-05', 1, 25000, 0, '2023-04-09 04:25:18'),
(68, 3, 'Out', 'Pago de suscripción de televisión', '2023-05-10', 1, 3000, 0, '2023-04-09 04:25:18'),
(69, 4404383, 'In', 'Venta de coche', '2023-05-15', 1, 250000, 0, '2023-04-09 04:25:18'),
(70, 4404383, 'Out', 'Pago de hipoteca', '2023-05-20', 1, 300000, 0, '2023-04-09 04:25:18');

-- --------------------------------------------------------

--
-- Table structure for table `qatable`
--

CREATE TABLE `qatable` (
  `idQA` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `details` longtext COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('Question','Bug','Other') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Other',
  `state` enum('Pending','Approved','Resolved','Rejected','Closed') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Pending',
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `qatable`
--

INSERT INTO `qatable` (`idQA`, `idUser`, `details`, `type`, `state`, `dateCreated`) VALUES
(1, 2, 'Cuando van a implementar el IVA?', 'Question', 'Pending', '2023-04-09 01:50:32'),
(2, 3, 'Los movimientos no se están registrando correctamente', 'Bug', 'Pending', '2023-04-09 01:50:32'),
(3, 4404383, 'Me encanta la app, son los mejores', 'Other', 'Pending', '2023-04-09 01:50:32'),
(4, 3, 'Prueba de Crear una QA desde la API', 'Other', 'Rejected', '2023-04-09 02:52:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `userName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userType` enum('Admin','User') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'User',
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `userName`, `email`, `password`, `userType`, `isActive`, `dateCreated`) VALUES
(1, 'abhacoAdmin', 'abhacoapp@gmail.com', '$2a$12$PPjCB5JaY/14powUNJ6LSesQ3MERy9Qkr7Fp95yW7O2yoCynStGde', 'Admin', 1, '2023-04-10 14:17:26'),
(2, 'Gorigami Dev', 'gorigamidev@gmail.com', '$2a$12$gS6zQ/ZgbYkimBmK/1YztOokIvw8B.EhqqpFQj55pPOb3t8l2V93e', 'User', 1, '2023-04-05 00:09:05'),
(3, 'Nicolas Balaguera', 'nicolasbg.89@gmail.com', '$2a$12$gS6zQ/ZgbYkimBmK/1YztOokIvw8B.EhqqpFQj55pPOb3t8l2V93e', 'User', 1, '2023-04-05 00:09:21'),
(4, 'David Barbosa', 'vid.barbosa@gmail.com', '$2a$12$gS6zQ/ZgbYkimBmK/1YztOokIvw8B.EhqqpFQj55pPOb3t8l2V93e', 'Admin', 1, '2023-04-10 14:18:34'),
(4404383, 'Prueba Random', 'prueba@pruebarandom.com', '$2a$12$gS6zQ/ZgbYkimBmK/1YztOokIvw8B.EhqqpFQj55pPOb3t8l2V93e', 'User', 1, '2023-04-09 01:22:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movements`
--
ALTER TABLE `movements`
  ADD PRIMARY KEY (`idMovement`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `qatable`
--
ALTER TABLE `qatable`
  ADD PRIMARY KEY (`idQA`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movements`
--
ALTER TABLE `movements`
  MODIFY `idMovement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `qatable`
--
ALTER TABLE `qatable`
  MODIFY `idQA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movements`
--
ALTER TABLE `movements`
  ADD CONSTRAINT `movements_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Constraints for table `qatable`
--
ALTER TABLE `qatable`
  ADD CONSTRAINT `qatable_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
