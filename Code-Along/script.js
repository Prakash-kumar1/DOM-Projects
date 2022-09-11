(async()=>{
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1`);
    let data = await response.json() ;
    data = data.results ;
    data.map((oneData)=>{

    })
})