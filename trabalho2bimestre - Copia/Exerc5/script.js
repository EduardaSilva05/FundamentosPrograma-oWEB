let inputValor = document.querySelector("#inputValor");
let inputPagamento = document.querySelector("#inputPagamento");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularLitros(){
    let calculo = (Number(inputPagamento.value) / Number(inputValor.value)).toFixed(1);

    h4Resultado.innerHTML = "Litros colocados = " + calculo + " litros(a).";

}

btCalcular.onclick = function(){
    calcularLitros();
}