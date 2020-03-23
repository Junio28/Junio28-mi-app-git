//En Mysql
const Sequelize = require('sequelize');

const DB_NAME = 'dbfact_node'; //nombre dela base de daros previamente creada
const DB_USER = 'root'; // nombre del usuario en nuestro motor db,
const DB_PASS = null; // contraseña

var sequelize = new Sequelize(
    DB_NAME,
    DB_USER, 
    DB_PASS,
{
    host:'localhost',
    dialect:'mysql',
    port: 3306
    }
);

// En Postgres

// const Sequelize = require('sequelize');

// const DB_NAME = 'dbfact_node'; //nombre dela base de daros previamente creada
// const DB_USER = 'postgres'; // nombre del usuario en nuestro motor db,
// const DB_PASS = '1234'; // contraseña

// var sequelize = new Sequelize(
//     DB_NAME,
//     DB_USER, 
//     DB_PASS,
// {
//     host:'localhost',
//     dialect:'postgres',
//     port: 5433
//     }
// );

//En Sqlite3
// const Sequelize = require('sequelize');

// const DB_NAME = 'dbfact_node'; //nombre dela base de daros previamente creada
// const DB_USER = null; // nombre del usuario en nuestro motor db,
// const DB_PASS = null; // contraseña

// var sequelize = new Sequelize(
//     DB_NAME,
//     DB_USER, 
//     DB_PASS,
// {
//     dialect:'sqlite',
//     storage:'dbfact_node.db',
//     define:{
//       underscore:true
//     }
//     }
// );


sequelize.sync({ force: true })
 .then(function () {
    console.log(`Database & tables created!`);
  });

module.exports = {sequelize}
