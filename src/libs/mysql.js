import mysql from "serverless-mysql";
import mysql2 from "mysql2";

export const conn = mysql({
  config: {
    host: "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    port: "3306",
    database: "recipehub",
  },
  library: mysql2,
});
