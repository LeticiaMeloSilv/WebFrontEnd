'use strict'
const botaoSomar=document.getElementById('somar')
const botaoIdentificar=document.getElementById('identificar')
const botaoMedia=document.getElementById('media')
const aparecer=document.getElementById('aparecer')
const nota5 = document.getElementById('nota5')
const n5=document.getElementById('n5')
function somar(){
    const numero1=Number(document.getElementById('numero1').value)
    const numero2=Number(document.getElementById('numero2').value)
    const resultado=document.getElementById('resultado')

    const total=numero1+numero2
    resultado.textContent=total
}
function identificar(){
    const numero=Number(document.getElementById('numero-item2').value)
    const resultado=document.getElementById('resultado-item2')

    if(numero>0){
        resultado.textContent='POSITIVO'
    }
    else if(numero<0){
        resultado.textContent='NEGATIVO'        
    }
    else{
        resultado.textContent='ZERO'        
    }   
}
function media(){
        const n1=Number(document.getElementById('n1').value)
        const n2=Number(document.getElementById('n2').value)
        const n3=Number(document.getElementById('n3').value)
        const n4=Number(document.getElementById('n4').value)
        const n5=Number(document.getElementById('n5').value)
        const resultado=document.getElementById('resultado-livro')
    
        const total=n1+n2+n3+n4
        const media=total/4
        if(media>7){
        resultado.textContent=media + '\nAPROVADO'
        }
        else{
            const nota5 =document.createElement('div')
            const texto5 = document.createElement('label')
            const pergunta=document.createElement('input')
            texto5.classList.add('item')
            pergunta.classList.add('item')

            total=n1+n2+n3+n4+n5
            media=total/5

            resultado.textContent='EM EXAME\n'+media

            nota5.replaceChildren(texto5, pergunta)
        }

    }

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)