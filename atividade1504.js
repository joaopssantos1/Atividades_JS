 function showform(formId) {
    var forms = document.getElementsByTagName('div');
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = 'none';
    }
    document.getElementById(formId).style.display = 'block';
}
 
function calcularIdade() {
    var idadeInput = document.getElementById('idade').value.trim();
   
    if (idadeInput === "") {
        alert("Por favor, insira uma idade válida.");
    } else {
        var idade = parseInt(idadeInput, 10);
        if (isNaN(idade) || idade < 0 || !Number.isInteger(idade)) {
            alert("Por favor, insira uma idade válida.");
        } else {
            if (idade >= 18) {
                alert("Você é maior de idade.");
            } else {
                alert("Você é menor de idade.");
            }
        }
    }
}
 
function calcularSalario() {
    var nomeVendedor = prompt("Digite o nome do vendedor:");
    var salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
    var totalVendas = parseFloat(prompt("Digite o total de vendas (em dinheiro) efetuadas pelo vendedor no mês:"));
 
    var comissao = totalVendas * 0.15;
    var salarioFinal = salarioFixo + comissao;
 
    document.getElementById("resultado").innerText = "Nome do vendedor: " + nomeVendedor + "\n" +
        "Salário fixo: R$ " + salarioFixo.toFixed(2) + "\n" +
        "Salário final do mês: R$ " + salarioFinal.toFixed(2);
}
 
function verificarParOuImpar() {

    let numero = prompt("Insira um número inteiro:");
 
    if (numero === null || numero.trim() === "" || isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número inteiro válido.";
        return;
    }
 
    numero = parseInt(numero, 10);
 
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = numero + " é um número par.";
    } else {
        document.getElementById("resultado").innerText = numero + " é um número ímpar.";
    }
}
 
function trocarValor() {
    var valorA = parseFloat(prompt("Digite o valor de A:"));
    var valorB = parseFloat(prompt("Digite o valor de B:"));
 
    var temp = valorA;
    valorA = valorB;
    valorB = temp;
 
    document.getElementById("resultado").innerText = "Valores trocados:\n" +
        "A: " + valorA + "\n" +
        "B: " + valorB;
}
 
function calcularPesoIdeal() {
    var altura = parseFloat(prompt("Digite a altura em metros:"));
    var sexo = prompt("Digite o sexo (homem ou mulher):");
 
    var pesoIdeal;
 
    if (sexo === "homem") {
        pesoIdeal = 72.7 * altura - 58;
        document.getElementById("resultado").innerText = "O peso ideal para um homem com altura de " + altura + " metros é: " + pesoIdeal.toFixed(2) + " kg";
    } else if (sexo === "mulher") {
        pesoIdeal = 62.1 * altura - 44.7;
        document.getElementById("resultado").innerText = "O peso ideal para uma mulher com altura de " + altura + " metros é: " + pesoIdeal.toFixed(2) + " kg";
    } else {
        document.getElementById("resultado").innerText = "Sexo inválido.";
    }
}
 
function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));
 
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }
 
    let imc = peso / (altura * altura);
 
    let mensagem = "Seu IMC é " + imc.toFixed(2) + ". ";
 
    if (imc < 18.5) {
        mensagem += "Você está abaixo do peso.";
    } else if (imc < 25) {
        mensagem += "Você está com peso normal.";
    } else if (imc < 30) {
        mensagem += "Você está com sobrepeso.";
    } else {
        mensagem += "Você está obeso.";
    }
 
    document.getElementById("resultado").innerText = mensagem;
}
 
function calcularPrecoVenda() {
    let precoCusto = parseFloat(document.getElementById("precoCusto").value);
    let percentualAcrescimo = parseFloat(document.getElementById("percentualAcrescimo").value);
    let custoFabrica = parseFloat(document.getElementById("custoFabricaCarro").value);
    const percentualDistribuidor = 0.28;
    const percentualImposto = 0.04;
 
    if (isNaN(precoCusto) || isNaN(percentualAcrescimo) || isNaN(custoFabrica)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores numéricos para os campos.";
        return;
    }
 
    let precoVenda = precoCusto * (1 + percentualAcrescimo / 100);
    let impostos = custoFabrica * percentualImposto;
    let custoConsumidor = custoFabrica + impostos + custoFabrica * percentualDistribuidor;
 
    document.getElementById("resultado").innerText = "O preço de venda do produto é: " + precoVenda.toFixed(2) +
        "\nO custo ao consumidor do carro é: " + custoConsumidor.toFixed(2);
}
