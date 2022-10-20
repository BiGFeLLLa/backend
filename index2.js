const express = require("express");
const server = express();
const memeList = require("./memeResource")

server.get("/meme", (req, res) => {
    const list=[...memeList];
    const randomIndex = Math.floor(Math.random() * list.length)
    res.send(` <img src="${list[randomIndex]}"/>`)
})

server.get("/", (request, response) =>{
    response.send("<h>Hello World!!!</h>");
})

server.listen(3000, () => console.log("Server started on port 3000"));