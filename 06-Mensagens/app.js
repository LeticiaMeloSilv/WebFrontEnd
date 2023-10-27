'use strict'
const funcionarios=[
  {
    destinatario: 'Jerome Bueno',
    foto_destinatario:'jerome_bueno.jpg',
    mensagem: 'aaa',
    notificacao: '1',
    tempo:'Há 30 minutos',
    remetente: 'João Paulo'
  },
  {
    destinatario: 'Daniel Silva',
    foto_destinatario:'daniel_silva.jpg',
    mensagem: 'bbb',
    notificacao: '3',
    tempo:'Há 30 minutos',
    remetente: 'Márcia'
  }, 
  {
    destinatario: 'Bruno Adorno',
    foto_destinatario:'bruno_adorno.jpg',
    mensagem: 'ccc',
    notificacao: '9',
    tempo:'Há 30 minutos',
    remetente: 'Joysi'
  }  
]

function criarCards(funcionarios){
    const container = document.getElementById('card-container')//preto

    const card = document.createElement('div')//vermelho
    card.classList.add('card')//vermelho

    const imagem = document.createElement('img')//laranja
    imagem.src = `./img/${funcionarios.foto_destinatario}`//laranja
    imagem.alt = funcionarios.destinatario//laranja

    const divContainer = document.createElement('div')//amarelo
    divContainer.classList.add('divContainer')//amarelo

    const destinatario = document.createElement('h3')//verde
    destinatario.textContent = funcionarios.destinatario//verde
    destinatario.classList.add('destinatario')//vermelho

    const notificacao = document.createElement('span')//vinho
    notificacao.textContent = funcionarios.notificacao//vinho
    notificacao.classList.add('notificacao')//vermelho
    
    const tempo = document.createElement('h5')//azul claro
    tempo.textContent = funcionarios.tempo//azul claro
    tempo.classList.add('tempo')//vermelho
    
    const mensagem = document.createElement('p')//azul escuro
    mensagem.textContent = funcionarios.mensagem//azul escuro
    
    const remetente = document.createElement('h3')//roxo
    remetente.textContent = funcionarios.remetente//roxo
    remetente.classList.add('remetente')//roxo


    divContainer.replaceChildren(destinatario, notificacao, tempo, mensagem, remetente)

    card.replaceChildren(imagem, divContainer)

    container.appendChild(card)

}


funcionarios.forEach(criarCards)