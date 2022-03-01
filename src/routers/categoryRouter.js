import express from "express";
import { getWebtoons } from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.get("/:id", getWebtoons);

export default categoryRouter;