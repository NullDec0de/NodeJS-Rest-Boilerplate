import { __dirname } from "../config.js";
import path from 'path'
class PageController {
  async LoadIndex(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  }
  async LoadAuth(req, res) {
    res.sendFile(path.join(__dirname, "/public/auth.html"));
  }
}

export const pageController = new PageController();