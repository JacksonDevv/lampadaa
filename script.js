const ativar = document.querySelector(".btn")
const imagem = document.querySelector(".apagada")
const imagem2 = document.querySelector(".acesa")
const desativa = document.querySelector(".btn2")

ativar.addEventListener("click", function(){
    imagem.style.display = "none"
    imagem2.style.display = "block"
})

desativa.addEventListener("click", function(){
    imagem.style.display = "block"
    imagem2.style.display = "none"
})
