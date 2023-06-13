let inputValor = document.querySelector("#inputValor");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDivisao(){
    let valorCarlos = parseInt(Number(inputValor.value) /3);
    let valorAndre = parseInt(Number(inputValor.value) /3);
    let valorFelipe = Number(inputValor.value) - (valorCarlos * 2)

    h4Resultado.innerHTML = "Carlos = R$ " + valorCarlos.toFixed(2) + "<br>" +  " Andre = R$ " + valorAndre.toFixed(2) + "<br>" + " Felipe = R$ " + valorFelipe.toFixed(2)

}

btCalcular.onclick = function(){
    calcularDivisao();
}