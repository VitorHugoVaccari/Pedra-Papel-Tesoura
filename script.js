function getHumanChoise(choise) {
  switch (choise) {
    case "pedra":
      return "Pedra";
    case "papel":
      return "Papel";
    case "tesoura":
      return "Tesoura";
    default:
      return "Invalido";
  }
}

function getComputerChoice() {
  const randomChoise = Math.floor(Math.random() * 3);

  switch (randomChoise) {
    case 0:
      return "Pedra";
    case 1:
      return "Papel";
    case 2:
      return "Tesoura";
  }
}

function playRound(humanChoise, computerChoise) {
  if (humanChoise === computerChoise) {
    result.innerHTML += '<p class="message message--tie">Empate, ninguém ganhou ponto.</p>';
    return "empate";
  }

  if (
    (humanChoise === "Pedra" && computerChoise === "Tesoura") ||
    (humanChoise === "Papel" && computerChoise === "Pedra") ||
    (humanChoise === "Tesoura" && computerChoise === "Papel")
  ) {
    result.innerHTML += `<p class="message message--win">Você venceu! ${humanChoise} vence ${computerChoise}.</p>`;
    return "humano";
  } else {
    result.innerHTML += `<p class="message message--lose">Você perdeu! ${computerChoise} vence ${humanChoise}.</p>`;
    return "computador";
  }
}

function playGame(hChoise) {
  result.innerHTML = "";

  let humanChoise = getHumanChoise(hChoise);
  let computerChoise = getComputerChoice();

  let resultado = playRound(humanChoise, computerChoise);

  if (resultado === "humano") {
    humanScore++;
  } else if (resultado === "computador") {
    computerScore++;
  }
  result.classList.add("pronto");
  result.innerHTML += `<p class="score">A sua pontuação é ${humanScore} e a do computador é ${computerScore}!</p>`;

  if (humanScore === 5 || computerScore === 5) {
    result.innerHTML += `<p class="message">Fim de Jogo</p>
  <p class="message">Você fez ${humanScore} pontos!</p>
  <p class="message">O robô fez ${computerScore} pontos!</p>`;

    if (humanScore === computerScore) {
      result.innerHTML += "<p class=\"message message--tie\">O jogo terminou em empate.</p>";
    } else if (humanScore > computerScore) {
      result.innerHTML += "<p class=\"message message--win\">Você ganhou o jogo!</p>";
    } else {
      result.innerHTML += "<p class=\"message message--lose\">Você perdeu o jogo!</p>";
    }

    humanScore = 0;
    computerScore = 0;
  }
}

let humanScore = 0;
let computerScore = 0;

let choise = document.querySelectorAll(".btn");
let result = document.getElementById("resultados");

choise.forEach((btn) => {
  btn.addEventListener("click", function () {
    playGame(btn.value);
  });
});
