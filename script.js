// =========================
// 📌 DADOS DO JOGO (Tech Forge)
// =========================
const nomeJogo = "Defesa Galáctica";
const genero = "Shooter";
const anoLancamento = 2026;
const dev = "Aluno";
const dificuldade = "Progressiva";


// =========================
// 🎯 EXECUTAR SÓ NA HOME
// =========================
if (document.body.id === "home") {

  let idade = prompt("Qual sua idade?");

  if (idade >= 16) {
    alert("Acesso liberado!");
  } else {
    alert("Acesso negado!");
  }

}


// =========================
// 👤 SAUDAÇÃO (contato.html)
// =========================
function enviarMensagem() {
  let nome = document.getElementById("nomeInput").value;
  let email = document.getElementById("emailInput").value;
  let mensagem = document.getElementById("mensagemInput").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  document.getElementById("mensagem").innerText =
    "Mensagem enviada com sucesso! Obrigado, " + nome + " 🚀";
}


// =========================
// 🎮 BOTÃO JOGAR
// =========================
function abrirJogo() {
  window.location.href = "jogo.html";
}


// =========================
// 🖥️ TELA CHEIA
// =========================
function fullscreen() {
  let iframe = document.getElementById("gameFrame");

  if (!iframe) return;

  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}


// =========================
// 🚀 LANÇAMENTO
// =========================
let anoAtual = new Date().getFullYear();

if (anoAtual == anoLancamento) {
  console.log("Grande lançamento do jogo!");
}

function abrirImagem(img) {
  let modal = document.getElementById("modal");
  let imgGrande = document.getElementById("imgGrande");

  modal.style.display = "flex";
  imgGrande.src = img.src;
}

function fecharImagem() {
  document.getElementById("modal").style.display = "none";
}