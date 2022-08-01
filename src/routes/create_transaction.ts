import express from "express";
import { Transaction } from "../entities/Transaction";
import { Client } from "../entities/Client";

const router = express();

router.post("/api/client/:clientId/transection", async (req, res) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;

  const client = await Client.findOne({
    where: {
      id: parseInt(clientId),
    }
  });

  if(!client){
    res.json({
        message: "Operation Successfull.",
        data: client,
      });
  }
  
});

export {
    router as createTransectionRoute
}
