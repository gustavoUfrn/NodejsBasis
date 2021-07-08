const express = require('express');
const app = express();

app.get("/cursos", (req, res) =>{
    return res.json(["curso 1"])
});

app.post("/cursos", (req, res) => {
    return res.json(["curso 1", "curso 2"]);
});

app.put("/cursos/:id", (req, res) => {
    return res.json(["curso 2", "curso 2"]);
});

app.patch("/cursos/:id", (req, res) => {
    return res.json(["curso 2","curos 3"]);
});

app.delete("/cursos/:id", (req, res) => {
    return res.json(["curso 2"]);
});

app.listen(3333);