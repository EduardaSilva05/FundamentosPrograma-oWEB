let inputX01 = document.querySelector("#inputX01");
let inputY01 = document.querySelector("#inputY01");
let inputX02 = document.querySelector("#inputX02");
let inputY02 = document.querySelector("#inputY02");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDistancia(){
    let calculo = Math.sqrt((Number(inputX01.value) - Number(inputX02.value))**2 +
                  (Number(inputY01.value) - Number(inputY02.value))**2);
    
    h4Resultado.innerHTML = "A distância entre os pontos é de: " + calculo;

}


btCalcular.onclick = function(){
    calcularDistancia();
}