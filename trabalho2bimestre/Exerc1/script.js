let inputValorBase = document.querySelector("#inputValorBase");
let inputValorAltura = document.querySelector("#inputValorAltura");
let h4Resultado = document.querySelector("#h4Resultado")
let btCalcular = document.querySelector("#btCalcular");

function calcularArea(){
    let calculo = Number(inputValorBase.value) * Number(inputValorAltura.value);
    
    h4Resultado.textContent = "Área = " + calculo + "m²";

}

btCalcular.onclick = function(){
    calcularArea();
}