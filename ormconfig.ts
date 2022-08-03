import { DataSource } from "typeorm";
import { Client } from "./src/entities/Client";
import { Banker } from "./src/entities/Banker";
import { Transaction } from "./src/entities/Transaction";
import {User} from "./src/entities/User"
import { Photo } from "./src/entities/Photo";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "typeorm",
    entities: [Client, Banker, Transaction, User, Photo],
    synchronize: true,
  });

export {
    AppDataSource as connectionPool
}