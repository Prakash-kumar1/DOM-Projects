(async()=>{
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1`);
    let data = await response.json() ;
    data = data.results ;
    data.map((oneData)=>{
        let main = document.querySelector('main');
        main.innerHTML += <div className="movie">
            <img src="https://image.tmdb.org/t/p/original/${oneData.poster_path}"></img>
            <h2>${oneData.title}</h2>
        </div>

    })
})