let inputSalario = document.querySelector("#inputSalario");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularAumento(){
    let calcular_15 = Number(inputSalario.value) * (15/100) + Number(inputSalario.value);
    let calcular_8 = calcular_15 - (calcular_15 * (8/100));

    h4Resultado.innerHTML = "Salário Inicial = R$ " + Number(inputSalario.value).toFixed(2) + "<br><br>" +
                            "Salário com aumento de 15% = R$ " + calcular_15.toFixed(2) + "<br><br>" +
                            "Salário Final = R$" + calcular_8.toFixed(2); 
}


btCalcular.onclick = function(){
    calcularAumento();
}