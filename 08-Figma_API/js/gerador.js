'use strict';

const queryString = window.location.search;
const url = new URLSearchParams(queryString);

let tema = url.get('tema');
let imagemSelecionada = 0;

const botaoEsconder = document.getElementById('botao_esconder');
const elementosParaEsconder = document.querySelectorAll('.esconder');
const tagImg = document.getElementById('imagens');
const gerar = document.getElementById('gerar_outra_imagem');
const editor = document.getElementById('editor');

async function pegarImagem() {
    const endPoint = `https://pixabay.com/api/?key=39628527-554dd7c08039f8eef99e49a77&q=${tema}&image_type=photo&pretty=true&lang=pt&per_page=200`;
    const response = await fetch(endPoint);
    let fotos = await response.json();
    return fotos.hits;
}

function criarTags(imagens) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = imagens.largeImageURL;
    li.appendChild(img);
    tagImg.appendChild(li);

    adicionarClasses();

    img.addEventListener('click', function () {
        toggleSelecionado(img);
    });
}

function adicionarClasses() {
    const imagens = document.querySelectorAll('#imagens img');

    imagens.forEach(function (imagem, index) {
        imagem.classList.add('imagem_' + index);
    });
}

function toggleSelecionado(imagemClicada) {
    const imagens = document.querySelectorAll('#imagens img');

    imagens.forEach(function (imagem) {
        imagem.classList.remove('selecionado');
    });

    imagemClicada.classList.add('selecionado');
}

async function carregarFotos() {
    tagImg.innerHTML = '';
    const imagens = await pegarImagem();
    imagens.forEach(criarTags);

    imagemSelecionada = 0;
    toggleSelecionado(imagens[0]);
}
botaoEsconder.addEventListener('click', function () {
    elementosParaEsconder.forEach(function (elemento) {
        elemento.style.display = 'none';
    });

    document.addEventListener('click', mostrarElementos);

    event.stopPropagation();
});

function mostrarElementos() {
    elementosParaEsconder.forEach(function (elemento) {
        elemento.style.display = 'block';
    });

    document.removeEventListener('click', mostrarElementos);
}

gerar.addEventListener('click', function () {

    imagemSelecionada = (imagemSelecionada + 1) % 200;

    const imagens = document.querySelectorAll('#imagens img');
    toggleSelecionado(imagens[imagemSelecionada]);

});

// function redirecionar() {
//     const urlFoto = imagens.namespaceURI
//     // const urlDestino = '../html/edicao.html?foto=' + encodeURIComponent(urlFoto);
//     // window.location.href = urlDestino;
//     console.log(urlFoto)
// }

// editor.addEventListener('click', redirecionar)
carregarFotos();

