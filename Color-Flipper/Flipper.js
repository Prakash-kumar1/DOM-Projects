const getColor = () => {
    // Hex code

    const randomNumber = Math.floor(Math.random() * 16777215)
    // console.log(randomNumber) ;

// For converting  Number  in  Hex-Code 
const randomCode = "#"  +  randomNumber.toString(16) ;
console.log(randomNumber , randomCode) ;
document.body.style.backgroundColor  =  randomCode ;
}

// Event Call
document.getElementById("btn").addEventListener("click" , getColor) ;

// Intial Call
getColor() ;




