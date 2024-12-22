function calcularIdade() {
    debugger;
    let idade = document.getElementById("idade").value;
    idade = parseFloat(idade);
    let resposta = document.getElementById("resposta");

    if (idade >= 5 && idade <= 10) {
        resposta.innerHTML = "Você ainda é uma <strong>Criança</strong>";
    } else if (idade <= 4) {
        resposta.innerHTML = "Não presta mentir, digite sua idade verdadeira <strong>seu frango</strong>";
    } else if (idade > 10 && idade < 15) {
        resposta.innerHTML = "Você é um(a) <strong>adolescente</strong>";
    } else if (idade > 14 && idade < 18) {
        resposta.innerHTML = "Você é um <strong>jovem</strong>";
    } else if (idade > 17 && idade < 60) {
        resposta.innerHTML = "você é um <strong>adulto</strong>";
    } else {
        resposta.innerHTML = "Você já é considerado uma pessoa de <strong>idade avançada</strong>";
    }

    // Reseta o valor de entrada e a resposta
    setTimeout(() => {
        document.getElementById("idade").value = ""; // Limpa o campo de entrada
        resposta.innerHTML = ""; // Limpa o conteúdo da resposta
    }, 5000); // Espera 5 segundos antes de limpar (ajuste o tempo se necessário)
}
