const PORT = 3000
const bodyParser = require('body-parser');
const express = require('express');
const posts = require('./model/posts');

const app = express();



app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})

//rota que recebe todos os posts
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})

//rota para incluir postagem
app.post("/new",bodyParser.json() ,(req, res) => {
    let title = req.body.title;
    let description = req.body.description
    
    posts.newPost(title, description)

    res.send("Post adicionado com sucesso")
})

