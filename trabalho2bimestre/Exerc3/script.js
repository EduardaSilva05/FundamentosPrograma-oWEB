let inputQntPaes = document.querySelector("#inputQntPaes");
let inputQntBroas = document.querySelector("#inputQntBroas");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularValor(){
    let calcularArrecadado = (Number(inputQntPaes.value) * 0.12) + (Number(inputQntBroas.value) * 1.50);
    let calcularPoupança = (calcularArrecadado * (10/100));

    h4Resultado.innerHTML = "Valor arrecadado: R$ " + calcularArrecadado.toFixed(2) + "<br>"+ "Valor a guardar: R$ " + calcularPoupança.toFixed(2);
}

btCalcular.onclick = function(){
    calcularValor();
}