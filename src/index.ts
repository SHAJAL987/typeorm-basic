import { createClientRouter } from "./routes/create_client";
import express from "express";
import { createBankerRouter } from "./routes/create_banker";
import { createTransectionRoute } from "./routes/create_transaction";
import { createUserRouter } from "./routes/create_user";
import {createPhotoRouter} from "./routes/create_photo"
import {connectionPool} from "../ormconfig"



connectionPool.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    //Routers
    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransectionRoute);
    app.use(createUserRouter);
    app.use(createPhotoRouter);

    app.listen(8585, ()=>{
        console.log("listening to port 8585");
    });

    console.log("Database connected.");
  })
  .catch((error) => {
    console.log(error.toString());
    throw new Error("Unable to Connect DB");
  });

