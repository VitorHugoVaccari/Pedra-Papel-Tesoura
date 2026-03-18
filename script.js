function randomChoise(num) {
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
      default: choise = "Insira um valor valido!";
      break;
  }
  return choise;
}

const userChoise = window.prompt("Escolha: Pedra, Papel ou Tesoura", "");

const robotChoise = randomChoise(3);

if /*Escolhas Pedra*/ ((userChoise == "Pedra" || userChoise == "pedra") && robotChoise == "Pedra") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Vocês empataram!`)
} else if ((userChoise == "Pedra" || userChoise == "pedra") && robotChoise == "Papel") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você perdeu!`)
} else if ((userChoise == "Pedra" || userChoise == "pedra") && robotChoise == "Tesoura") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você ganhou!`)


} else if /*Escolhas Papel*/ ((userChoise == "Papel" || userChoise == "papel") && robotChoise == "Papel") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Vocês empataram!`)
} else if ((userChoise == "Papel" || userChoise == "papel") && robotChoise == "Tesoura") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você perdeu!`)
} else if ((userChoise == "Papel" || userChoise == "Papel") && robotChoise == "Pedra") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você ganhou!`)


} else if /*Escolhas Tesoura*/ ((userChoise == "Tesoura" || userChoise == "tesoura") && robotChoise == "Tesoura") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Vocês empataram!`)
} else if ((userChoise == "Tesoura" || userChoise == "Tesoura") && robotChoise == "Pedra") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você perdeu!`)
} else if ((userChoise == "Tesoura" || userChoise == "Tesoura") && robotChoise == "Papel") {
    console.log(`Você escolheu ${userChoise} e o robô escolheu ${robotChoise}. Você ganhou!`)


} else {
    console.log("Insira um valor valido!")
}
