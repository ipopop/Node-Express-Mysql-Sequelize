const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mydatabase",
  "root",
  "new_password",
  {
    host: "127.0.0.1",
    dialect: "mysql"
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
