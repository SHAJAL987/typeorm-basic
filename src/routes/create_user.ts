import express from "express";
import { User } from "../entities/User";
import { connectionPool } from "../../ormconfig";

const router = express.Router();

router.post("/api/user", async (req, res) => {
  const { name } = req.body;

  const user = new User();
  user.name = name;

  const userData = await connectionPool.manager.save(user);

  res.json({
    data: userData,
  });
});

export { router as createUserRouter };
