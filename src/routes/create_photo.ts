import express from "express";
import { connectionPool } from "../../ormconfig";
import { Photo } from "../entities/Photo";
import { User } from "../entities/User";

const router = express.Router();

router.post("/api/user/:id/photo", async (req, res) => {
  const { url, name, id } = req.body;
  const userId = parseInt(req.params.id);

  const photo = new Photo();
  photo.url = url;
  photo.user = id;

  const userPic = await connectionPool.manager.save(photo);

  res.json({
    data: userPic,
  });
});

export { router as createPhotoRouter };
