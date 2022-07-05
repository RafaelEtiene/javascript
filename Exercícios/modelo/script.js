//Acrescentando um conteúdo "filho"

var p = document.createElement("p")
p.innerHTML = "Olá pessoal"

document.getElementById("conteudo").appendChild(p)

//Removendo um conteúdo filho

document.getElementById("conteudo").removeChild(p)