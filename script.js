const form = document.getElementById("form-verificacao");

function verificaNumero(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){

    const numeroA = document.getElementById("numeroA");
    const numeroB = document.getElementById("numeroB");

    if (!verificaNumero(numeroA.value, numeroB.value)) {
        alert("O número B não é maior que o número A");
    } else {
        alert("O número B é maior que o número A");
    }
})