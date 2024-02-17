//modulo responsavel por gerir as postagens
module.exports = {
    posts: [{
        id: "kfjahkjeh",
        title: "Título teste",
        description: "Descrição do teste"
    }],
    getAll() {
        return this.posts
    },
    newPost(title, description){
        this.posts.push({id: generateId(), title, description})
    },
    deletePost(id){
        this.posts = this.posts.filter((post) => post.id !== id)
    }
}

function generateId(){
    return Math.random().toString(36).substring(2)
}