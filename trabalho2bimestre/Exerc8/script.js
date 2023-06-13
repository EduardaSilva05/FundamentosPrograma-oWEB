let inputCamisetaPequena = document.querySelector("#inputCamisetaPequena");
let inputCamisetaMedia = document.querySelector("#inputCamisetaMedia");
let inputCamisetaGrande = document.querySelector("#inputCamisetaGrande");
let btCalcularValor = document.querySelector("#btCalcularValor");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularValorTotal(){
    let calculo = (Number(inputCamisetaPequena.value) * 10) + (Number(inputCamisetaMedia.value) * 12) + (Number(inputCamisetaGrande.value) * 15);

    h4Resultado.innerHTML = "O valor total é de R$ " + calculo.toFixed(2);
}

btCalcularValor.onclick = function(){
    calcularValorTotal();
}