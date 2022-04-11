//falta arrumar o css limitar o valor dos inputs e passar o pente fino 




"use strict"

var hora = 0;
var min = 0;
var seg = 0;
var controle = 0;
var cont = 0;

var troca = 0;

var tempoTrab = 25; //10
var tempoInt = 15; //10

var minInt = 0;
var segint = 0;
var minCont = 0;
var tempo = 1000;

var cronoIntervalo;
var crono;

const audio = document.querySelector('audio')


let inputT = document.querySelector(".timeT");
inputT.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        console.log(e.target.value);
        tempoTrab = e.target.value;
        document.getElementById('mostrarTrab').innerText =  tempoTrab < 10 ? '0' + tempoTrab : tempoTrab;
        document.getElementById('timeT').value = '2';
    }
})

let inputI = document.querySelector(".timeI");
inputI.addEventListener('keyup', (i) => {
    if(i.keyCode === 13){
        console.log(i.target.value);
        tempoInt = i.target.value;
        document.getElementById('mostrarInt').innerText = tempoInt < 10 ? '0' + tempoInt : tempoInt;
    }
})







function iniciar() {
    console.log(`tempo de trabalho ${tempoTrab} minutos e o de intervalo ${tempoInt} minutos `);
    if (troca == 0) {
        if (controle == 0) {
            crono = setInterval(() => { timer(); }, tempo)
            controle = 1;
        }
    } else if (troca == 1) {
        if (controle == 0) {
            cronoIntervalo = setInterval(() => { timerInt(); }, tempo)
            controle = 1;
        }
    }

}

function pausar() {
    clearInterval(crono);
    clearInterval(cronoIntervalo);
    controle = 0;
}

function parar() {
    hora = 0;
    min = 0;
    seg = 0;
    cont = 0;
    controle = 0;
    minInt = 0;
    segint = 0;
    minCont = 0;
    clearInterval(crono);
    clearInterval(cronoIntervalo);
    document.getElementById('counter').innerText = '00:00:00';
    document.getElementById('intervalo').innerText = '00:00';
}

function timer() {
    seg++;
    cont++;
    troca = 0;
    if (seg == 60) {
        seg = 0;
        min++;
        minCont++;
        if (min == 60) {
            min = 0;
            hora++;
        }
    }
    ////
    if (minCont == tempoTrab) {
        audio.play()
        clearInterval(crono);
        minCont = 0;
        cronoIntervalo = setInterval(() => { timerInt(); }, tempo)
    }
    ////
    var format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format;
}

function timerInt() {
    troca = 1;
    segint++;


    if (segint == 60) {
        segint = 0
        minInt++;

    }
    ////
    if (minInt == tempoInt) {
        audio.play()
        clearInterval(cronoIntervalo);
        minInt = 0;
        segint = 0;
        document.getElementById('intervalo').innerText = '00:00';
        crono = setInterval(() => { timer(); }, tempo)
    }
    ////
    var formatInt = (minInt < 10 ? '0' + minInt : minInt) + ':' + (segint < 10 ? '0' + segint : segint);
    document.getElementById('intervalo').innerText = formatInt;
}

///////////////////////////////////////////////




