//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const btnAdicionarAmigo = document.querySelector(".button-add");
const inputAmigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const amigoSorteado = document.querySelector("#resultado");

let amigos = [];

function adicionarAmigo() {
  const amigo = inputAmigo.value;

  amigo ? amigos.push(amigo) : alert("Por favor, insira um nome.");

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

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos para sortear");
  }

  const indiceAmigo = Math.floor(Math.random()) * amigos.length;

  amigoSorteado.textContent = amigos[indiceAmigo];
}
