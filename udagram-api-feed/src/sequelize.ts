import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log(`config.username=${config.username}`);
console.log(`config.password=${config.password}`);
console.log(`config.password=${config.password}`);
console.log(`config.password=${config.password}`);
console.log("Added env names inquotes");
export const sequelize = new Sequelize({
  username: "POSTGRES_USERNAME",
  password: "POSTGRES_PASSWORD",
  database: config.database,
  host: config.host,

  dialect: config.dialect,
  storage: ":memory:",
});
