("strict");

const ratings = document.querySelectorAll("span");
let button = document.querySelector("button");
const ratingSelect = document.querySelector(".rating-select");
const ratingSucess = document.querySelector(".rating-sucess");
const userRate = document.querySelector(".user-rate")
const errorMssg = document.querySelector(".error")
let rate;

ratings.forEach(rating => {
    rating.addEventListener("click", function(){
        removeStyle()
        rating.style.backgroundColor = "hsl(217, 12%, 63%)"
        rating.style.color = "hsl(0, 0%, 100%)"
        rate = rating.textContent;
})
});


function removeStyle(){
   for(let i = 0; i < ratings.length; i++){
    ratings[i].style.backgroundColor = "hsl(216, 12%, 8%)";
    ratings[i].style.color = "hsl(217, 12%, 63%)"
   }
}

button.addEventListener("click", function(){
    if(rate){
        ratingSelect.classList.add("hidden");
        ratingSucess.classList.remove("hidden");
        userRate.textContent = rate;
        userRate.style.color = "hsl(25, 97%, 53%)"
    } else {
        errorMssg.classList.remove("hide");
        setInterval(function(){
            errorMssg.classList.add("hide");
        },900)
    }
})
