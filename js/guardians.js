const wrapper = document.getElementById('wrapper-guardian');

getApi('business');

function getApi(section) {
    fetch('https://content.guardianapis.com/search?section=' + section + '&from-date=2023-02-01&show-fields=thumbnail&api-key=09952af4-48fd-48e8-a603-8b8309f81803')
    .then(res => res.json())
    .then(data => {
        data.response.results.map(article => {
            cloneTemplate(article);
        });
    }); 
}

function cloneTemplate(article) {
    let template = document.getElementById('guardian-template');
    let clone = template.content.cloneNode(true); 

    fillContent(clone, article); 
}

function fillContent(clone, article) {
    const title = clone.getElementById('title'); 
    const publishedDate = clone.getElementById('published-date'); 
    const urlArticle = clone.getElementById('url'); 
    const image = clone.getElementById('image');

    title.textContent = article.webTitle; 
    //publishedDate.innerHTML = data.webPublicationDate; 

    image.style.backgroundImage = `url('${article.fields.thumbnail}')`; 
    image.style.backgroundSize = 'cover';

    const linkArticle = document.createElement('a'); 
    linkArticle.href = `${article.webUrl}`; 
    linkArticle.textContent = 'Read Article'; 
    linkArticle.style.textDecoration = 'underline';
    urlArticle.append(linkArticle);

    wrapper.append(clone);
}


function getOtherApi(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.response.results.map(article => {
            cloneTemplate(article); 
        }); 
    }); 
}


const movies = document.getElementById('movies'); 
const business = document.getElementById('business'); 
const world = document.getElementById('world'); 
const uk = document.getElementById('uk'); 
const us = document.getElementById('us'); 
const australia = document.getElementById('australia'); 
const music = document.getElementById('music'); 
const travel = document.getElementById('travel'); 
const food = document.getElementById('food'); 
const marvel = document.getElementById('marvel'); 
const sport = document.getElementById('sport'); 



function backgroundColor(section) {
    section.style.backgroundColor = '#011433';
}


movies.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getOtherApi('https://content.guardianapis.com/search?tag=film/film,tone/reviews&from-date=2023-02-01&show-fields=trailText,byLine,starRating,firstPublicationDate,productionOffice,publication,thumbnail,lang,bodyText&show-tags=contributor&api-key=09952af4-48fd-48e8-a603-8b8309f81803');
    backgroundColor(movies); 
});


business.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('business');
    backgroundColor(business); 
});


world.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('world');
    backgroundColor(world); 
});


uk.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('uk-news');
    backgroundColor(uk); 
});


us.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('us-news');
    backgroundColor(us); 
});


australia.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('australia-news');
    backgroundColor(australia); 
});


music.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('music');
    backgroundColor(music); 
});


travel.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('travel');
    backgroundColor(travel); 
});


food.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('food');
    backgroundColor(food); 
});


marvel.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getOtherApi('https://content.guardianapis.com/search?q=marvel&from-date=2023-01-01&show-fields=thumbnail&api-key=09952af4-48fd-48e8-a603-8b8309f81803');
    backgroundColor(marvel); 
});


sport.addEventListener('click', () => {
    wrapper.innerHTML = ''; 
    getApi('sport');
    backgroundColor(sport); 
});