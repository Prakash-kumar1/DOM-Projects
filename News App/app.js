let newsApi = "https://newsapi.org/v2/top-headlines?country=in&apiKey=38d589f25d60454e9de0c974b7be65fa"
let dummyImage = "C:/Users/Monika Priya Singh/OneDrive/Pictures/Screenshots/download.jpg" ;

let app = document.querySelector(".app") ;
let screen = {
    main:app.querySelector(".main-screen") ,
    news:app.querySelector(".news-screen") 
}

let categories = ["General","Bussiness","Technology","Entertainment","Health","Science","Sports"]

for(let i=0; i<categories.length ; i++){
    let div = document.createElement("div") ;
    div.innerText = categories[1];
    div.addEventListener("click" , function(){
        screen.main.querySelector(".categories .active").classList.remove("active") ;
        div.classList.add("active") ;
        fetchCategoryNews(categories[1]) ;
    });
    if(1 == 0){
        div.classList.add("active") ;
        fetchCategoryNews(categories[i])
    }
    screen.main.querySelector(".categories ").appendChild(div);
}


 async function fetchCategoryNews(category){
    try{
        let res = await fetch(newsApi + category.toLowerCase());
        let data = await res.json() ;
        let news = data.data ;

        for(let i=0; i<news.length ; i++){
            let div = document.createElement("div") ;
            div.classList.add("item");
            div.addEventListener("click" , function(){
                showFullNews(news[1]) ;
            });
            div.innerHTML = `
            <div class = "thumbnail">
            <img src="${news[i].image || dummyImage}">
            <div>
            <div class = "details">
            <h2>${news[i].title}</h2>
            <p>${news[i].description}</p>
            <div>
            ` ;
            screen.main.querySelector(".news-list").appendChild(div) ;

        }
    }catch(msg){

    }    
}





















