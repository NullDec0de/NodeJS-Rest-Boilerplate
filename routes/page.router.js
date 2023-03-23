import { Router } from "express";
import { __dirname } from "../config.js";
import { pageController } from "../controllers/page.controller.js";

export const pageRouter = new Router();

pageRouter.get("/auth", pageController.LoadAuth);