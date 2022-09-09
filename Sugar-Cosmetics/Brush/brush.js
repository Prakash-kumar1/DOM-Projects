




fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    console.log(completedata);
    
    let data1 = "";
    completedata.map((values)=>{
        data1 += `<div class="card">
        
        <img src="${values.image_link}"></img>

        <p>${values.name}</p>

        <h2 class="price">₹ ${values.price}</h2>

        <div class="rating">
            <div>
                <i class="fa-solid fa-star"></i> 
            </div>
            <div>
                ${ values.rating || 3}
                
            </div>
        </div>


        <div class="heart-btn">
        <div class="heart"><i class="fa-regular fa-heart"></i></div>
        <div class="btn"><button>CHOOSE PRODUCTS</button></div>
        </div>
    </div>`;


    });

    document.getElementById("cards").innerHTML=data1;


}).catch((error)=>{
    console.log(error);
})