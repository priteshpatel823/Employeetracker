"use strict";

const mysql = require("mysql");
const util = require("util");

/**
 * Create MYSQL Connection
 */
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_tracker"
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;