import express from 'express'
import { pageRouter, FirstRouter } from "./routes/index.js";
import {__dirname} from './config.js'
import { dbRouter } from './routes/db.router.js';

const app = express()
const port = 3000


app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use('/', FirstRouter)
app.use("/api/db", dbRouter)
app.use("/", pageRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))