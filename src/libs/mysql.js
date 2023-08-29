import mysql from "serverless-mysql";
import mysql2 from "mysql2";

export const conn = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "EmptyFile1.",
    port: "3306",
    database: "recipehub",
  },
  library: mysql2,
});
