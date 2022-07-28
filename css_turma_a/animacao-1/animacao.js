var esquerdo = document.getElementById("esquerdo");

esquerdo.addEventListener("click", function(){
 direito = document.getElementById("direito");
 direito.style.width="20vw";
})

var direito = document.getElementById("direito");

direito.addEventListener("click", function(){
    direito.style.width="0vw";
})