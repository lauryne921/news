fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=GDY3CcOz14bDscUgkAukcXi4YGpw6UXV')
.then(res => res.json())
.then(data => {

    data.results.map(article => {
        cloneTEmplate(article);
    }); 
});


function cloneTEmplate(article) {
    let template = document.getElementById('nyt-template');
    let clone = template.content.cloneNode(true); 

    fillContent(clone, article);

    clone.addEventListener('click', () => {
        console.log('hello'); 
    })
}


function fillContent(clone, article) {
    const title = clone.getElementById('title'); 
    const content = clone.getElementById('content'); 
    //const publishedDate = clone.getElementById('published-date'); 
    const image = clone.getElementById('image'); 
    const urlArticle = clone.getElementById('url'); 
    const writtenBy = clone.getElementById('written-by'); 

    title.textContent = article.title; 
    content.textContent = article.abstract; 
    //publishedDate.textContent = article.published_date; 
    image.style.backgroundImage = `url('${article.thumbnail_standard}')`; 
    image.style.backgroundSize = 'cover'; 
    
    const articleLink = document.createElement('a'); 
    articleLink.href = article.url; 
    articleLink.textContent = "Read Article";
    articleLink.style.color = 'black';
    articleLink.style.textDecoration = 'underline';
    urlArticle.append(articleLink);
    
    writtenBy.textContent = article.byline;

    document.getElementById('wrapper-nyt').append(clone);
}





/*function cloneTemplate(article) {
    let template = document.getElementById('nyt-template');
    let clone = template.content.cloneNode(true); 

    fillContent(clone, article)
}

function fillContent(clone, article) {
    const title = clone.getElementById('title'); 
    const content = clone.getElementById('content'); 
    const publishedDate = clone.getElementById('published-date'); 
    const image = clone.getElementById('image'); 
    const urlArticle = clone.getElementById('url'); 
    const writtenBy = clone.getElementById('written-by'); 

    title.textContent = article.title; 
    content.textContent = article.abstract; 
    publishedDate.textContent = article.published_date; 
    image.style.backgroundImage = `url('${article.multimedia[3].url}')`; 
    image.style.backgroundSize = 'cover'; 
    urlArticle.textContent = article.url; 
    writtenBy.textContent = article.byline;
}*/