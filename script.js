function expandirImagem(elemento) {
    var modal = document.getElementById("modal");
    var imgAmpliada = document.getElementById("img-ampliada");
    imgAmpliada.src = elemento.src;
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}