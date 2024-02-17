const posts = require('../model/posts');
const bodyParser = require('body-parser');
const express = require('express');

const router = express.Router()

//rota que recebe todos os posts
router.get("/all", (_, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

//rota para incluir postagem
router.post("/new",bodyParser.json() ,(req, res) => {
    let title = req.body.title;
    let description = req.body.description
    
    posts.newPost(title, description)

    res.send("Post adicionado com sucesso")
})

module.exports = router