const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Windows@32",
    database: 'BancoDB'
});

const cerrarConexion = () => {
    conexion.end((error) => {
        if (error) {
            console.log("Error al finalizar la conexión: ", error);
        } else {
            console.log("Conexión cerrada correctamente.");
        }
    });
};

conexion.query('SELECT * FROM Cuentas', (error, resultados) => {
    if (error) {
        console.log("Error al ejecutar la consulta de cuentas: ", error);
    } else {
        console.log("Cuentas registradas: ", resultados);
    }
});

conexion.query('SELECT * FROM Clientes', (error, resultados) => {
    if (error) {
        console.log("Error al ejecutar la consulta de clientes: ", error);
    } else {
        console.log("Clientes registrados: ", resultados);
    }
});

conexion.query('SELECT * FROM Clientes INNER JOIN Cuentas ON Clientes.id_cliente = Cuentas.id_cliente', (error, resultados) => {
    if (error) {
        console.log("Error al realizar el JOIN de cuentas y clientes: ", error);
    } else {
        console.log("Clientes con cuentas asociadas: ", resultados);
    }
});

conexion.query('SELECT * FROM Clientes LEFT JOIN Cuentas ON Clientes.id_cliente = Cuentas.id_cliente WHERE Cuentas.id_cliente IS NULL', (error, resultados) => {
    if (error) {
        console.log("Error al obtener clientes sin cuentas: ", error);
    } else {
        console.log("Clientes sin cuentas asociadas: ", resultados);
    }
    cerrarConexion();
});
