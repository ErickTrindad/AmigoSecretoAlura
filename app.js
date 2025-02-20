//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const btnAdicionarAmigo = document.querySelector(".button-add");
const inputAmigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");

let amigos = [];

function adicionarAmigo() {
  const amigo = inputAmigo.value;

  amigo ? amigos.push(amigo) : alert("Digite o nome do amigo");

  inputAmigo.value = "";

  renderizaAmigo();
}

function renderizaAmigo() {
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");

    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
