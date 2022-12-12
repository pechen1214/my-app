export class GetNews {

    static getAllNews() {
        return fetch('http://localhost:4000/data').then(
            (response) => response.json()
        )
    }

    static editNews(newNews, oldID) {
        return (

            fetch('http://localhost:4000/data/', {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newNews)
            }),
            fetch('http://localhost:4000/data/' + oldID, {
                method: "DELETE", headers: { 'Content-Type': 'application/json' }
            }).then((response) =>
                document.location.reload()
            )
        )
    }

    static deleteNews(deleteNewsId) {
        return fetch('http://localhost:4000/data/' + deleteNewsId, {
            method: "DELETE", headers: { 'Content-Type': 'application/json' }
        }).then((response) =>
            document.location.reload())
    }

    static exit() {
        return document.location.reload()
    }
}