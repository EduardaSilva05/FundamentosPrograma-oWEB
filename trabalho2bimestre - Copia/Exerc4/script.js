let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDias(){
    let calculo = Number(inputIdade.value) * 365;

    h4Resultado.innerHTML = String(inputNome.value) + " , você já viveu " + calculo + " dias." 
}

btCalcular.onclick = function(){
        calcularDias();
}