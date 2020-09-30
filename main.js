let nome = prompt("Olá, seja bem-vinda ao Quiz! \n" + "Nos fale seu nome.");

let numero = prompt(
  nome +
    " , aceita se desafiar no nosso Quiz? \n" +
    "Digite 1 para SIM \n" +
    "Digite 2 para NÃO"
);

if (numero == 1) {
  document.getElementById("jogador").innerHTML = nome;

  let pergunta1 = prompt(
    nome +
      " , qual a capital do Acre?\n" +
      "1) Rio Branco \n" +
      "2) Boa Vista\n" +
      "3) Porto Velho "
  );
  if (pergunta1 == 1) {
    resposta1 = "Resposta 1 Correta";
    document.getElementById(
      "corretas"
    ).innerHTML += `<p class="verde">${resposta1}</p>`;
  } else {
    resposta1 = "Pergunta 1 Errada";
    document.getElementById(
      "erradas"
    ).innerHTML += `<p class="vermelho">${resposta1}</p>`;
  }

  let pergunta2 = prompt(
    nome +
      " , qual a capital do Brasil?\n" +
      "1) São Paulo \n" +
      "2) Rio de Janeiro\n" +
      "3) Brasília"
  );
  if (pergunta2 == 3) {
    resposta2 = "Resposta 2 Correta";
    document.getElementById(
      "corretas"
    ).innerHTML += `<p class="verde">${resposta2}</p>`;
  } else {
    resposta2 = "Resposta 2 Errada";
    document.getElementById(
      "erradas"
    ).innerHTML += `<p class="vermelho">${resposta2}</p>`;
  }

  let pergunta3 = prompt(
    nome +
      " , qual a capital de Alagoas?\n" +
      "1) Maceió \n" +
      "2)Recife \n" +
      "3)Fortaleza "
  );
  if (pergunta3 == 1) {
    resposta3 = "Resposta 3 Correta";
    document.getElementById(
      "corretas"
    ).innerHTML += `<p class="verde">${resposta3}</p>`;
  } else {
    resposta3 = "Resposta 3 Errada";
    document.getElementById(
      "erradas"
    ).innerHTML += `<p class="vermelho">${resposta3}</p>`;
  }
} else {
  alert("Venha jogar conosco na próxima vez");
}

// switch (pergunta1){
//     case 1

// }
