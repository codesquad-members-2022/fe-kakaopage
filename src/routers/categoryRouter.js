import express from "express";
import { getCategory, getIssue, getBanner } from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.get("/:id", getCategory);
categoryRouter.get("/issue/:id", getIssue);
categoryRouter.get("/banner/:id", getBanner);

export default categoryRouter;