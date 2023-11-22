
//saiadin
function tocaSomSaiadin(){
    document.querySelector("#som_tecla_saiadin").play();
}
document.querySelector(".tecla_saiadin").onclick = tocaSomSaiadin;
//voar
function tocaSomVoar(){
    document.querySelector("#som_tecla_voar").play();
}
document.querySelector(".tecla_voar").onclick = tocaSomVoar;

//flash
function tocaSomFlash(){
    document.querySelector("#som_tecla_flash").play();
}
document.querySelector(".tecla_flash").onclick = tocaSomFlash;

//thor
function tocaSomThor(){
    document.querySelector("#som_tecla_thor").play();
}
document.querySelector(".tecla_thor").onclick = tocaSomThor;

//miranha
function tocaSomMiranha(){
    document.querySelector("#som_tecla_miranha").play();
}
document.querySelector(".tecla_miranha").onclick = tocaSomMiranha;

//hulk
function tocaSomHulk(){
    document.querySelector("#som_tecla_hulk").play();
}
document.querySelector(".tecla_hulk").onclick = tocaSomHulk;

//batman
function tocaSomBatman(){
    document.querySelector("#som_tecla_batman").play();
}
document.querySelector(".tecla_batman").onclick = tocaSomBatman;

//ferro
function tocaSomFerro(){
    document.querySelector("#som_tecla_ferro").play();
}
document.querySelector(".tecla_ferro").onclick = tocaSomFerro;

//america
function tocaSomAmerica(){
    document.querySelector("#som_tecla_america").play();
}
document.querySelector(".tecla_america").onclick = tocaSomAmerica;
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let lista = document.querySelectorAll(".tecla");
let contador = 0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista(contador).onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}*/