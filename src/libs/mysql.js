import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "EmptyFile1.",
    port: "3306",
    database: "recipehub",
  },
});
