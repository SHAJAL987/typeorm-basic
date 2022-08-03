import express from "express";
import { Client } from "../entities/Client";
import { Transaction } from "../entities/Transaction";
import { connectionPool } from "../../ormconfig";

const router = express();

router.post("/api/client/transection", async (req, res) => {
  const { type, amount, clientid } = req.body;

  const client = await Client.findOne({
    where: {
      id: clientid,
    },
  });

  if (!client) {
    res.json({
      message: "Operation Successfull.",
      data: client,
    });
  }

  

  const transaction = new Transaction();
  transaction.type = type;
  transaction.amount = amount;

  //await transaction.save();

  res.json({
    message: "Operation Successfull",
    data: transaction
  });
});

export { router as createTransectionRoute };
