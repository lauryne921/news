fetch('https://gnews.io/api/v4/top-headlines?category=business&lang=en&max=3&from=2023-02-01&apikey=cc529fcc0cfc1792000c24b12532169f')
.then(res => res.json())
.then(data => {
    data.articles.map(article => {
        cloneFirstTemplate(article);
    });
}); 


function cloneFirstTemplate(article) {
    let templateHome = document.getElementById('home-template'); 
    let cloneTemplate = templateHome.content.cloneNode(true); 
    
    fillFirstTemplate(cloneTemplate, article); 
}

function fillFirstTemplate(cloneTemplate, article) {
    cloneTemplate.getElementById('title').textContent = article.title;

    cloneTemplate.getElementById('image').style.backgroundImage = `url('${article.image}')`; 
    cloneTemplate.getElementById('image').style.backgroundSize = 'cover';

    const urlArticle = document.createElement('a'); 
    urlArticle.href = article.url; 
    urlArticle.textContent = 'Read Article';  
    urlArticle.style.textDecoration = 'underline';
    cloneTemplate.getElementById('url').append(urlArticle);

    document.getElementById('wrapper-home').append(cloneTemplate);
}



fetch('https://gnews.io/api/v4/top-headlines?category=world&lang=en&max=9&from=2023-02-01&apikey=cc529fcc0cfc1792000c24b12532169f')
.then(res => res.json())
.then(data => {
    data.articles.map(article => {
        cloneSecondTemplate(article);
    }); 
}); 

function cloneSecondTemplate(article) {
    let templateArticles = document.getElementById('articles-template'); 
    let clone = templateArticles.content.cloneNode(true);   

    fillSecondTemplate(clone, article);
}

function fillSecondTemplate(clone, article) {
    clone.getElementById('title-article').textContent = article.title;

    clone.getElementById('content').textContent = article.content; 

    clone.getElementById('description').textContent = article.description; 

    clone.getElementById('image-article').style.backgroundImage = `url('${article.image}')`; 
    clone.getElementById('image-article').style.backgroundSize = 'cover';

    const urlArticle = document.createElement('a'); 
    urlArticle.href = article.url; 
    urlArticle.textContent = 'Read Article';  
    urlArticle.style.textDecoration = 'underline';
    clone.getElementById('url-article').append(urlArticle);

    document.getElementById('wrapper-articles').append(clone);
}
