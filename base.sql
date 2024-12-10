CREATE DATABASE IF NOT EXISTS SistemaFinanciero;
USE SistemaFinanciero;

CREATE TABLE IF NOT EXISTS ClientesBancarios (
    cliente_id INT PRIMARY KEY,
    nombre_completo VARCHAR(60),
    ciudad_residencia VARCHAR(50)
);

INSERT INTO ClientesBancarios (cliente_id, nombre_completo, ciudad_residencia) VALUES
(201, 'Carlos Méndez', 'Antigua Guatemala'),
(202, 'María López', 'Quetzaltenango'),
(203, 'Luis Fernández', 'Escuintla'),
(204, 'Andrea Gómez', 'Cobán'),
(205, 'Pablo García', 'Santa Rosa');

CREATE TABLE IF NOT EXISTS CuentasBancarias (
    cuenta_id INT PRIMARY KEY,
    cliente_id INT,
    tipo_cuenta VARCHAR(25),
    monto DECIMAL(12, 2),
    FOREIGN KEY (cliente_id) REFERENCES ClientesBancarios(cliente_id)
);

INSERT INTO CuentasBancarias (cuenta_id, cliente_id, tipo_cuenta, monto) VALUES
(301, 201, 'Corriente', 1200.00),
(302, 202, 'Ahorros', 2200.00),
(303, 203, 'Corriente', 3200.00),
(304, 204, 'Ahorros', 800.00),
(305, 205, 'Corriente', 1500.00);
