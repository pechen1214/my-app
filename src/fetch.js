const reqestURL = 'http://api.mediastack.com/v1/news?access_key=4f4f82304fdc4d61d5ad39f4cc0d3c8d'
const obj={author: '',
    category: '',
    country: '',
    description: '',
    image: '',
    language: '',
    published_at: '',
    source: '',
    title: '',
    url: ''
    }
function sendRequest (method, url, body=null){
    return fetch(url).then(response =>{
        return response.json()
    })
}

sendRequest('Get',reqestURL)
    .then(data => console.log(data.data))
