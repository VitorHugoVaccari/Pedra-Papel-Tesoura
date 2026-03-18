function getHumanChoise(choise) {
  switch (choise) {
    case "pedra":
      choise = "Pedra";
      break;
    case "papel":
      choise = "Papel";
      break;
    case "tesoura":
      choise = "Tesoura";
      break;
    default:
      choise = "Insira um valor valido!";
      break;
  }
  return choise;
}

function getComputerChoice(num) {
  const randomChoise = Math.floor(Math.random() * num);
  let choise;
  switch (randomChoise) {
    case 0:
      choise = "Pedra";
      break;
    case 1:
      choise = "Papel";
      break;
    case 2:
      choise = "Tesoura";
      break;
    default:
      choise = "Insira um valor valido!";
      break;
  }
  return choise;
}

let game = window.prompt("Quantos partidas você deseja jogar?", "");
switch (game) {
  case typeof game == "String" || 0:
    console.log("Insira uma quantidade valida de partidas!");
    break;
  default:
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < game; i++) {
      let choise = window
        .prompt("Escolha: Pedra, Papel ou Tesoura", "")
        .toLowerCase();

      let userChoise = getHumanChoise(choise);
      const computerChoise = getComputerChoice(3);

      if (
        /*Escolhas Pedra*/ userChoise === "Pedra" &&
        computerChoise == "Pedra"
      ) {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Vocês empataram. Ninguem ganhou ponto!`,
        );
      } else if (userChoise === "Pedra" && computerChoise == "Papel") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você perdeu. O robô ganhou 1 ponto!`,
        );
        computerScore++;
      } else if (userChoise === "Pedra" && computerChoise == "Tesoura") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você venceu e ganhou 1 ponto!`,
        );
        humanScore++;
      } else if (
        /*Escolhas Papel*/ userChoise === "Papel" &&
        computerChoise == "Papel"
      ) {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Vocês empataram. Ninguem ganhou ponto!`,
        );
      } else if (userChoise === "Papel" && computerChoise == "Tesoura") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você perdeu. O robô ganhou 1 ponto!`,
        );
        computerScore++;
      } else if (userChoise === "Papel" && computerChoise == "Pedra") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você venceu e ganhou 1 ponto!`,
        );
        humanScore++;
      } else if (
        /*Escolhas Tesoura*/ userChoise === "Tesoura" &&
        computerChoise == "Tesoura"
      ) {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Vocês empataram. Ninguem ganhou ponto!`,
        );
      } else if (userChoise === "Tesoura" && computerChoise == "Pedra") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você perdeu. O robô ganhou 1 ponto!`,
        );
        computerScore++;
      } else if (userChoise === "Tesoura" && computerChoise == "Papel") {
        console.log(
          `Você escolheu ${userChoise} e o robô escolheu ${computerChoise}. Você venceu e ganhou 1 ponto!`,
        );
        humanScore++;
      } else {
        console.log("Insira um valor valido!");
      }
    }
    console.log("Fim de Jogo");
    console.log(`Você fez ${humanScore} pontos!`);
    console.log(`O robô fez ${computerScore} pontos!`);

    if (humanScore === computerScore) {
      console.log("O Jogo terminou com um empate");
    } else if (humanScore > computerScore) {
      console.log("Você ganhou o jogo!");
    } else if (computerScore > humanScore) {
      console.log("Você perdeu o jogo!");
    }
    break;
}
