import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"123456",
    database:"typeorm",
    entities:[Client],
    synchronize: true
});
AppDataSource.initialize().then(()=>{
    console.log("Database connected.");
}).catch((error) =>{
    console.log(error);
    throw new Error("Unable to Connect DB");
});