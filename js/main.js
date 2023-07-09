let h1Element = document.querySelector("h1");
h1Element.style.color = "blue";

let h2Element = document.querySelector("h2");
h2Element.style.color = "green";


let tituloElement = document.getElementById("active");
console.log(tituloElement.innerText);

tituloElement.addEventListener("click", function(){
    tituloElement.classList.toggle("active");
}
);

