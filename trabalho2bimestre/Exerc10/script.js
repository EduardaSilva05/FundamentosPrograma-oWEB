let inputDias = document.querySelector("#inputDias");
let btConverte = document.querySelector("#btConverte");
let h4Resultado = document.querySelector("#h4Resultado");

function converterDias(){
    let anos = (Number(inputDias.value) / 365).toFixed(0)
    let meses = ((Number(inputDias.value) % 365) / 30).toFixed(0)
    let dias = ((Number(inputDias.value) % 365) % 30).toFixed(0)

    h4Resultado.innerHTML = Number(inputDias.value) + " dias, é igual a: " + 
                            anos + " ano(s), " + meses + " mês(es), " + dias + " dia(s). "
}

btConverte.onclick = function(){
    converterDias();
}