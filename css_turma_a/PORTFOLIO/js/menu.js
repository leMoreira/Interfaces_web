const burguer = document.getElementById("burguer");

burguer.addEventListener("click", ()=>{
   const coluna = document.querySelector("header .coluna");
   coluna.style.marginLeft = "0";

   const fechar = document.getElementById("fechar");
   fechar.style.display="flex";
   
   burguer.style.display="none";
});

const fechar = document.getElementById("fechar");

fechar.addEventListener("click", ()=>{
    const coluna = document.querySelector(".coluna");
    coluna.style.marginLeft = "-50%";

    const burguer = document.getElementById("burguer");
    burguer.style.display="flex"

    fechar.style.display="none";
});