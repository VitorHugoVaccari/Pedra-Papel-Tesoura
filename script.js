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
    console.log("Empate, ninguem ganhou ponto");
    return "empate";
  }

  if (
    (humanChoise === "Pedra" && computerChoise === "Tesoura") ||
    (humanChoise === "Papel" && computerChoise === "Pedra") ||
    (humanChoise === "Tesoura" && computerChoise === "Papel")
  ) {
    console.log(`Você venceu! ${humanChoise} vence ${computerChoise}`);
    return "humano";
  } else {
    console.log(`Você perdeu! ${computerChoise} vence ${humanChoise}`);
    return "computador";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let choise = prompt("Escolha: Pedra, Papel ou Tesoura").toLowerCase();

    let humanChoise = getHumanChoise(choise);
    let computerChoise = getComputerChoice();

    let resultado = playRound(humanChoise, computerChoise);

    if (resultado === "humano") {
      humanScore++;
    } else if (resultado === "computador") {
      computerScore++;
    }
  }

  console.log("Fim de Jogo");
  console.log(`Você fez ${humanScore} pontos!`);
  console.log(`O robô fez ${computerScore} pontos!`);

  if (humanScore === computerScore) {
    console.log("O jogo terminou em empate");
  } else if (humanScore > computerScore) {
    console.log("Você ganhou o jogo!");
  } else {
    console.log("Você perdeu o jogo!");
  }
}

playGame();