let hr = 0, min = 0, sec = 0, intervalo;

function doisDigitos(digito) {
    return digito < 10 ? `0${digito}` : digito;
}

function iniciar() {
    clearInterval(intervalo); // limpa o intervalo anterior
    intervalo = setInterval(contadorTempo, 1000);
}

function pausar() {
    clearInterval(intervalo);
}

function parar() {
    clearInterval(intervalo);
    sec = min = hr = 0;
    document.getElementById('contador').innerText = '00:00:00';
}

function contadorTempo() {
    if (++sec == 60) {
        sec = 0;
        if (++min == 60) {
            min = 0;
            hr++;
        }
    }
    document.getElementById('contador').innerText = `${doisDigitos(hr)}:${doisDigitos(min)}:${doisDigitos(sec)}`;
}
