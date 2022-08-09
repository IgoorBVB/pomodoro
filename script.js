var sec = 0
var minFoco = 25
var minDesc = 5
var interval 
var duration = 1500
var durationDesc

let tempoFoco = document.querySelector('input#valorEst')
let tempoDesc = document.querySelector('input#valorDesc')

function continuar(){
    document.getElementById("conteudo").style.display= "none"
    duration = 60 * tempoFoco.value
    minFoco = tempoFoco.value
    minDesc = tempoDesc.value
    sec = 0
}

function inicio(){
    document.getElementById("conteudo").style.display= ""
}

function start() {
    clearInterval(interval)  //Evita que o cronometro fique acelerado
    if(duration > 0)
    cronometro()
    interval = setInterval(cronometro, 1000)
}

function pause(){
    clearInterval(interval)
}

function cronometro(){
    var display = document.querySelector('.tempo')
    var legenda = document.querySelector('#legenda')

    if(duration > 0) {
        sec=sec-1
        if(sec < 0){
            minFoco = minFoco-1
            sec = 59
        }
        
        if(sec < 10){
            sec = '0' +sec
        }
    
        display.innerText=minFoco+':'+sec
        duration = duration - 1
        //console.log(`${duration}`)
    
        if(duration == 0) {
            pause()
            durationDesc = 60 * tempoDesc.value
            sec = 0
            legenda.innerText='Descanso'
            legenda.style.color="#F2C94C"
            document.getElementById('status').style.backgroundColor="#F2C94C"
        }
    }
     //cronometro descanso
    if(durationDesc > 0 ) {
        sec=sec-1
        if(sec < 0){
            minDesc = minDesc-1
            sec = 59
        }
        
        if(sec < 10){
            sec = '0' +sec
        }
    
        display.innerText=minDesc+':'+sec
        durationDesc = durationDesc - 1
        console.log(`${durationDesc}`)
        if(durationDesc == 0) {
            pause()
            continuar()
            duration = 60 * tempoFoco.value
            display.innerText=minFoco+':0'+sec
            legenda.innerText='Foco'
            legenda.style.color=""
            document.getElementById('status').style.backgroundColor=""
        }
    }
}