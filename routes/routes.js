import {Router} from 'express';
import path from 'path';
const __dirname = path.resolve();
export const FirstRouter = new Router()


FirstRouter.get('/', function(req, res) { res.sendFile(path.join(__dirname, '/public/index.html')) })