import Article from "./Article"
function ArticleList(props){

    return(
        <main>
           {props.posts.map((article)=><Article 
           key={article.id}
           title={article.title}
           preview={article.preview}
           date={article.date}
            />)} 

        </main>
    )
}
export default ArticleList