let inputQntCavalos = document.querySelector("#inputQntCavalos");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularFerraduras(){
    let calculo = Number(inputQntCavalos.value) * 4;
    
    h4Resultado.textContent = calculo + " Ferraduras";
}

btCalcular.onclick = function(){
    calcularFerraduras();
}