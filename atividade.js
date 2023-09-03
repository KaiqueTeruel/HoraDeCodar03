////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function executarCoder3Atividade1() {
  let valor01 = parseInt(prompt("Insera o primeiro valor"));
  let valor02 = parseInt(prompt("Insera o segundo valor"));
  let resultado;

  while (valor02 <= 0) {
    valor02 = parseInt(prompt("Insera o primeiro valor"));
  }
  resultado = valor01 / valor02;
  alert("O resultado da Divisão é " + resultado);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function executarCoder3Atividade2() {
  let contagem = 30;

  while (contagem >= 0) {
    document.write("<p>Contagem Regressiva</p>" + contagem + " Segundos");
    contagem--;
  }

  document.write("<h1>EXPLOSION!!!!</h1>");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade3() {
  let numeros = 10;

  while (numeros > 0) {
    document.write(" " + numeros);
    numeros--;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade4() {
  let valor = 15;
  let soma = 0;
  let quantidade = 0;

  while (valor >= 15 && valor <= 100) {
    soma += valor; // Nesse codigo ela vai pegar cada repetição e somar a variavel soma ou seja ( 15 depois 15 + 16 depois 15 + 16 + 17 e assim por diante)
    quantidade++; // Aqui a variavel quantidade inicia com 0 e vai ter o mesmo efeito da variavel soma a diferença é que ele nao vai somar nada apenas adiciona um novo valor a variavel ate chegar a 85 que é a quantidade de numero entre 15 e 100
    valor++;
  }
  let resultado = soma / quantidade; // Aqui "variavel Resultado" vai pegar a soma de todos os numeros entre 15 e 100 da "variavel Soma" e dividir pela quantidade de numeros que a "variavel Quantidade" possui que no caso é 85
  document.write(`<p>O valor é ${resultado}</p>`);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade5() {
  let valor1 = parseInt(prompt("Escreva o primeiro valor: "));
  let valor2 = parseInt(prompt("Escreva o segundo valor: "));
  let soma = 0;
  let qntdNumero = 0;

  while (valor1 < valor2) {
    soma += valor1; // Enquanto o "valor1" for menor que "valor2"  ele vai somar cada repetição e adiacionar a "varivel soma" ou seja ( se o numero inicial for 10 ele vai fazer 10, depois 10 + 11 depois, 10 + 11 + 12 e assim por diante)
    qntdNumero++; // Inicia em 0 e vai ser atribuido 1 numero a cada fez que a repetição rodar, ou seja comeca com 0 , depois 0 vai se tornar 1, depois 1 se torna 2 e assim por diante
    valor1++; // "valor++"" vai adiacionar 1 numero a "variavel valor" quanto o "valor1" for menor que o "valor2"
  }

  let resultado = soma / qntdNumero;
  alert("Resultado: " + resultado);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade6() {
  let alunosAprovados = 0;

  function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

    let media = (nota1 + nota2) / 2;

    alert("A media do Aluno é " + media);

    if (media >= 9.5) {
      alert("Aluno aprovado!");
      alunosAprovados++;
    } else {
      alert("Aluno reprovado.");
    }

    let resposta = prompt(
      "Calcular a média de outro aluno? (S/N)"
    ).toUpperCase();

    if (resposta === "S") {
      calcularMedia(); // Chama a função novamente para calcular a média de outro aluno.
    } else {
      alert(`Total de alunos aprovados: ${alunosAprovados}`);
    }
  }

  // Chama a função calcularMedia() para iniciar o programa.
  calcularMedia();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function executarCoder3Atividade7() {
  var somaNotas = 0;
  var notasLidas = 0;

  while (notasLidas < 6) {
    var nota = parseFloat(prompt("Digite a próxima nota (entre 0 e 10):"));

    if (nota >= 0 && nota <= 10) {
      somaNotas += nota;
      notasLidas++;
    } else {
      alert("Nota inválida. Digite uma nota entre 0 e 10.");
    }
  }

  var media = somaNotas / 6;

  document.write("Média das notas: " + media);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade8() {
  let valorN = parseInt(prompt("Digite um número inteiro maior que zero (N):"));

  if (valorN <= 0 || isNaN(valorN)) {
    alert("Valor incorreto. Digite um número inteiro maior que zero.");
  } else {
    let contador = 1;
    while (contador <= valorN) {
      document.write("<p>" + contador + "</p>");
      contador++;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade9() {
  var numero = 101;
  var contador = 0;
  while (contador < 10) {
    document.write(numero + "<br>");
    contador++;
    numero++;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade10() {
  {
    let valorN = parseInt(prompt("Informe um valor para a Tabuada:"));
    let contador = 1;

    while (contador <= valorN) {
      let tabuada = "";
      let multiplicador = 1;

      while (multiplicador <= 10) {
        tabuada +=
          contador +
          " x " +
          multiplicador +
          " = " +
          contador * multiplicador +
          "<br>";
        multiplicador++;
      }

      document.write("Tabuada do " + contador + ":<br>" + tabuada);
      contador++;
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function executarCoder3Atividade11() {
  let dentroIntervalo = 0;
  let foraIntervalo = 0;
  let contador = 1;
  let valor = 0;

  while (contador <= 10) {
    valor = parseFloat(prompt("Informe o valor " + contador + ":"));

    if (valor >= 24 && valor <= 42) {
      dentroIntervalo++;
    } else {
      foraIntervalo++;
    }

    contador++;
  }

  alert("Valores dentro do intervalo (24, 42): " + dentroIntervalo);
  alert("Valores fora do intervalo (24, 42): " + foraIntervalo);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
