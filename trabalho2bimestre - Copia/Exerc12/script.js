let inputNumero = document.querySelector("#inputNumero");
let btVerificar = document.querySelector("#btVerificar");
let h4Resultado = document.querySelector("#h4Resultado");

function verificarUDC(){
    let numero = String(inputNumero.value)

    h4Resultado.innerHTML = "CENTENA = " + numero[0] + "<br><br>" + " DEZENA = " + numero[1] + "<br><br>" + 
                            " UNIDADE = " + numero[2]

    if(numero.length > 3){
        alert("Por favor insira números com apenas 3 digitos")
        window.location.reload()
        h4Resultado.textContent = ""
    }
}

btVerificar.onclick = function(){
    verificarUDC();
}