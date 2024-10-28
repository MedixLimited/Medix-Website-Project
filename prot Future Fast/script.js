// Referências para as ondas
var onda1 = document.getElementById('onda1');
var onda2 = document.getElementById('onda2');
var onda3 = document.getElementById('onda3');
var onda4 = document.getElementById('onda4');

// Função de movimentação das ondas
function movimentarOndas() {
    var rolagemPos = window.scrollY;

    // Ajustando a posição X de cada onda com base na rolagem
    onda1.style.backgroundPositionX = `${400 + rolagemPos * 4}px`;
    onda2.style.backgroundPositionX = `${300 - rolagemPos * 4}px`;
    onda3.style.backgroundPositionX = `${200 + rolagemPos * 2}px`;
    onda4.style.backgroundPositionX = `${100 - rolagemPos * 2}px`;
}

// Monitorando o scroll e aplicando movimentação
window.addEventListener('scroll', movimentarOndas);
