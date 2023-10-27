'use strict'

document.getElementById('tema')

function redirecionar() {
    const valorDoInput = document.getElementById('tema').value;
    const urlDestino = '../html/gerador.html?tema=' + encodeURIComponent(valorDoInput);
    window.location.href = urlDestino;
}

tema.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        redirecionar()
    }
})

tema.addEventListener('focusout', redirecionar)
