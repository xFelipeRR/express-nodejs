import Express from "express";
import Products from "./products";

const app = Express();
const port = 3000

app.get("/", (req, res) => {
    res.json(Products) // vai mandar a resposta em formato json
})

app.listen(port, () => { console.log("Listening at port" + port) })
