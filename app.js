// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let amigos = [];

function agregarAmigo(){
    let nombre = inputAmigo.value;
    if(nombre.trim() == ""){
        return alert("Por favor, inserte un nombre.");
    }
    amigos.push(nombre);
    inputAmigo.value = "";
    actualizarLista();
}

function actualizarLista(){
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo =>{
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}

function sortearAmigo(){
    if(amigos.length === 0){
        return alert("No hay amigos para sortear.")
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(indiceAleatorio);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = "";
    let item = document.createElement("li");
    item.textContent = amigoSorteado;
    resultado.appendChild(item);
}