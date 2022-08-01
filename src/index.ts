import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import express from "express";
import { createBankerRouter } from "./routes/create_banker";
import { createTransectionRoute } from "./routes/create_transaction";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "typeorm",
  entities: [Client, Banker, Transaction],
  synchronize: true,
});
AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    //Routers
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransectionRoute);

    app.listen(8585, ()=>{
        console.log("listening to port 8585");
    });

    console.log("Database connected.");
  })
  .catch((error) => {
    console.log(error.toString());
    throw new Error("Unable to Connect DB");
  });
