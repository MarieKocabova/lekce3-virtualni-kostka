// tady je místo pro náš program

let textZpravy = document.querySelector("#zprava");
let obrazek = document.querySelector("#kostka");


function hodKostkou() {
    let hodnotaHodu = Math.floor(Math.random() * 6) +1;

    if (hodnotaHodu === 6) {
        textZpravy.innerHTML = "Vyhrál jsi!!!";
    } else {
        textZpravy.innerHTML = "Hodil jsi " + hodnotaHodu + ". Zkus to znovu."
    }

    obrazek.src= "obrazky/" + hodnotaHodu + ".png";

}


//jednorožec

//top 250px
//left 450px
//position absolute

//jednorozec.style.left = 450px;
//jednorozec.style.top = 250px;

//button onclick="venaDoOhrady"

//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

//jak najít pozicování prvku 