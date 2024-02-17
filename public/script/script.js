document.addEventListener('DOMContentLoaded', ()=> updatePosts())

const titleElement = document.getElementById('title')
const descriptionElement = document.getElementById('description')
const saveBtn = document.getElementById('save')

saveBtn.addEventListener('click', newPost)

const baseUrl = "http://localhost:3000/api/"

async function updatePosts(){
    const reponse = (await fetch(baseUrl+ "all"))
    const posts = JSON.parse(await reponse.json())

    let postElements = ''

    posts.forEach(post => {
        let postElement = `
            <div class="card mb-4" id=${post.id}>
                <div class="card-header d-flex justify-content-between">
                    <h5 class="card-title">${post.title}</h5> 
                    <div class="btn-group " role="group">
                        <button type="button" class="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">
                        ${post.description}
                    </p>
                </div>
            </div>`
        
        postElements += postElement
    });

    document.getElementById('posts').innerHTML = postElements
}

async function newPost(){
    let title = titleElement.value
    let description = descriptionElement.value
    
    let post = {
        title,
        description
    }

    const options = {
        method: "POST",
        headers: new Headers({"content-type":"application/json"}),
        body: JSON.stringify(post)
    }
    const response = await fetch(baseUrl + "new", options)
        console.log(response)

    updatePosts()
    clearInputs()
}

function clearInputs(){
    titleElement.value = ""
    descriptionElement.value = ""
}