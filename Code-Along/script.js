var cart = 0 ;

(async()=>{
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1`);
    let data = await response.json() ;
    console.log(data)
    data = data.results ;
    data.map((oneData)=>{
        let main = document.querySelector('main');
        main.innerHTML += `<div class="movie">
            <img src="https://image.tmdb.org/t/p/original/${oneData.poster_path}">
            <div class="head-er" >
            <h2>${oneData.title}</h2>
            <button class="addButton" onClick="add_to_cart(event)" id = ${oneData.id}>Add+</button>
            </div>   
        </div>` ;

    })
})() ;

function add_to_cart(e){
   let idd = e.target.id ;
   for(let i=0 ; i<data.length ; i++){
    if(data[i].id === idd){
        cart.push(data[i])
    }
   }
   console.log(cart) ;

}