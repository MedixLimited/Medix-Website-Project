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




// Array para armazenar os produtos
let produtos = [];

// Elementos do DOM
const form = document.getElementById('formProduto');
const inputProduto = document.getElementById('produto');
const listaSupermercado = document.getElementById('listaSupermercado');

// Função para renderizar a lista na tela
function renderizarLista() {
    listaSupermercado.innerHTML = '';
    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = produto;

        // Container de botões
        const containerBotoes = document.createElement('div');

        // Botão de edição
        const btnEditar = document.createElement('button');
        btnEditar.style.backgroundColor = '#387977';
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarProduto(index);

        // Botão de remoção
        const btnRemover = document.createElement('button');
        btnRemover.style.backgroundColor = '#4f5261';
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerProduto(index);

        // Adiciona elementos à lista
        li.appendChild(span);
        containerBotoes.appendChild(btnEditar);
        containerBotoes.appendChild(btnRemover);
        li.appendChild(containerBotoes);
        listaSupermercado.appendChild(li);
    });
}

// Função para adicionar produto
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = inputProduto.value.trim();
    if (produto !== '') {
        produtos.push(produto);
        inputProduto.value = '';
        renderizarLista();
    }
});

// Função para remover produto
function removerProduto(index) {
    produtos.splice(index, 1);
    renderizarLista();
}

// Função para editar produto
function editarProduto(index) {
    const novoProduto = prompt("Editar produto:", produtos[index]);
    if (novoProduto !== null && novoProduto.trim() !== '') {
        produtos[index] = novoProduto.trim();
        renderizarLista();
    }
}




// updated from Onur Gumus's nice improvements here
// https://codepen.io/onurgumus/pen/LYKwzbe

document.documentElement.classList.toggle('light-mode')

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode')
  document.documentElement.classList.toggle('light-mode')
}

demo.onclick = event => {
  if (document.startViewTransition)
    document.startViewTransition(() => toggleDarkMode())
  else 
    toggleDarkMode()
}