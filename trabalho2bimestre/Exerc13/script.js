let inputRaio = document.querySelector("#inputRaio");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularArea(){
    let calculo = (3.14 * (Number(inputRaio.value)**2));

    h4Resultado.innerHTML = "A área da pizza é = " + calculo;
}

btCalcular.onclick = function(){
    calcularArea();
}

