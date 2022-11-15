export class GetNews{
    static getAllNews(){
        return fetch('http://localhost:4000/data').then(
            (response) =>response.json()
          )
    }
}