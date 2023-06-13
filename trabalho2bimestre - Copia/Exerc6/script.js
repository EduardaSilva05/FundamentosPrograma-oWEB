let inputKg = document.querySelector("#inputKg");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularPreçoKG(){
    let calculo = (Number(inputKg.value) * 12).toFixed(2);

    h4Resultado.innerHTML = "R$ " + calculo;
}

btCalcular.onclick = function(){
    calcularPreçoKG();
}