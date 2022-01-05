const express = require('express'); 
const { Sequelize } = require('sequelize');
const dbConfig = require('./config.json')
const app = express(); // this function call creates a new express application
const port = 3000; //port where application will run
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database, 
    dbSettings.username,
    dbSettings.password,
    dbSettings
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});


// {
//     "development": {
//         "username": "root",
//         "password": "root",
//         "database": "relevel",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
//     },
//     "production": {
//         "user": "adminUser"
//     }
// }

// Connecting Database to Application
// Start MySQL server -> mysql -u root -p
// CREATE Database Relevel;

// npm install mysql2
// npm install sequelize