import { useState } from "react"
import ModalNews from "./modalNews"

export function Admin({ news }) {

const [enterNews, setEnterNews] = useState('')

 


    return (
        <div>
             {enterNews && <ModalNews enterNews={enterNews}/>}
             <button onClick={()=>setEnterNews(news)}>
                Добавить новость
             </button>
            {news.map((news) => (
                <div key={news.id}className=" list-group">
                    <button
                        onClick={()=>setEnterNews(news)}
                        type="button"
                        class="list-group-item list-group-item-action active"
                        aria-current="true"
                    >
                        {news.title}
                    </button>
                </div>
            )
            )}
        </div>
    )
}