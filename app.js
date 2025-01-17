// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let amigos = [];

function agregarAmigo(){
    let nombre = inputAmigo.value;
    if(nombre.trim() == ""){
        return alert("Por favor, inserte un nombre.");
    }
    amigos.push(nombre);
    console.log(amigos);
    inputAmigo.value = "";
}