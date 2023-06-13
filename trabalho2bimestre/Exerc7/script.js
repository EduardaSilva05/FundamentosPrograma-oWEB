let inputDia = document.querySelector("#inputDia");
let inputMes = document.querySelector("#inputMes");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDiasAno(){
    let calculo = (Number(inputMes.value) - 1) * 30 + Number(inputDia.value);

    h4Resultado.innerHTML = "Já se passaram " + calculo + " dia(s).";

    if(Number(inputMes.value > 12)){
        alert("É somente aceito até o mês 12 (dezembro)")
        h4Resultado.textContent = ""
        window.location.reload();
    } 

    if(Number(inputDia.value > 30)){
        alert("Número de dias maior que o aceito (30)")
        h4Resultado.textContent = ""
        window.location.reload();
    }
}

btCalcular.onclick = function(){
    calcularDiasAno();
}