'use strict'

const forma1=document.getElementById('forma1')
const forma2=document.getElementById('forma2')
const forma3=document.getElementById('forma3')
const forma4=document.getElementById('forma4')
const forma5=document.getElementById('forma5')
const forma6=document.getElementById('forma6')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}
function mudarForma1(){
    forma2.classList.toggle('circulo')
}
function mudarForma2(){
    //https://www.cssportal.com/css-clip-path-generator/
    //https://icons.getbootstrap.com/icons/moon-stars-fill/
    forma3.classList.toggle('estrela')
}
function mudarForma3(){
    forma4.classList.toggle('linha')
}
function mudarForma4(){
    forma5.classList.toggle('rotate')
}
function mudarForma5(){
    forma6.classList.toggle('fundo')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma1)
forma3.addEventListener('click', mudarForma2)
forma4.addEventListener('click', mudarForma3)
forma5.addEventListener('click', mudarForma4)
forma6.addEventListener('click', mudarForma5)