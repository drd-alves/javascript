var textoH1 = document.getElementById("titulo")
alert(textoH1.textContent)
textoH1.className="vermelho"
textoH1.textContent="Texto alterado pelo JS"

var textoH2 = document.getElementById("subtitulo")
alert(textoH2.textContent)

var textoLi = document.getElementsByTagName("li")[3]
alert(textoLi.textContent)


var textoClassVerde = document.getElementsByClassName("verde")
for (var i=0; i<textoClassVerde.length; i++){
    alert (textoClassVerde[i].textContent)
}

var textoLiVerde = document.querySelectorAll("li.verde")
for (var i=0; i<textoLiVerde.length; i++){
    alert ("Conteúdo pego Query Selector: " + textoLiVerde[i].textContent)
}