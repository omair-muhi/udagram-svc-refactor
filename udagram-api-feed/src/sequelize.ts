import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log(`config.username=${config.username}`);
console.log(`config.password=${config.password}`);
console.log(`config.database=${config.database}`);
console.log(`config.host=${config.host}`);
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: config.dialect,
  storage: ":memory:",
});
