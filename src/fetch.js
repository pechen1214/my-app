const reqestURL = 'http://api.mediastack.com/v1/news?access_key=4f4f82304fdc4d61d5ad39f4cc0d3c8d'

    fetch(reqestURL)
        .then(response =>{return response.json()
        })
        .then(data => {
            for (let key of data.data.keys()) {
                console.log(data.data[key]);
            }
        })
        