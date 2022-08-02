import express from "express";
import { Client } from "../entities/Client";
import { Transaction } from "../entities/Transaction";

const router = express();

router.post("/api/client/:clientId/transection", async (req, res) => {
  const { clientId } = req.params;
  const { type, amount } = req.body;

  const client = await Client.findOne({
    where: {
      id: parseInt(clientId),
    },
  });

  if (!client) {
    res.json({
      message: "Operation Successfull.",
      data: client,
    });
  }

  const transaction = Transaction.create({
    type:type,
    amount:amount
  });

  await transaction.save();

  res.json({
    message: "Operation Successfull",
    data: transaction
  });
});

export { router as createTransectionRoute };
