import { Router } from "express"
import { __dirname } from "../config.js"
import connection from "../db/db.js"

export const dbRouter = new Router()

dbRouter.get("/users", function (req, res) {
    connection.query("SELECT * FROM users", function (err, rows, fields) {
        res.json(rows)
    })
})
