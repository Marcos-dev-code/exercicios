

//Essa função é responsavel por registrar a placa e o horario da entrada do veiculo no estacionamento!
//função que é chamada quando o botão de entrada de veiculo for acionado.
let funçaoEntrada = null;


function entrada(){

    var placa = document.getElementById('placa-do-carro').value.toUpperCase(); // captura o valor dentro do elemento selecionado pelo id.
    var retornarPlaca = document.getElementById("retornar-placa")            //captura o elemento selecionado pelo id
    var retornarHoras = document.getElementById("retorna-horario-de-entrada")



    //verificador do campo destinado a placa: se vazio, então ele retorna um alerta, caso receba um valor, executa o proximo bloco
    if (placa == ""){
    alert("Por favor, digite a placa do veiculo!")

    }else{
        //bloco que captura o horario atual é salva em uma variavel.
        const agora = new Date();
        const horas = agora.getHours();
        const minutos= agora.getMinutes();
        const segundos = agora.getSeconds();
        const indice = [horas,":", minutos,":", segundos]

        //constante que armazena os valores das variaveis de dentro da função em arrays.
        const retornoF1 = [placa, indice]

        retornarPlaca.innerHTML = `<p>Placa do veiculo: <strong>${placa}</strong></p>`
        retornarHoras.innerHTML = `Entrada registrada as ${indice[0]}:${indice[2]}:${indice[4]}`
        return retornoF1;
    }                 
}

document.getElementById("entrada").onclick = function(){
    if(funçaoEntrada==null){
        funçaoEntrada = entrada()}}  


document.getElementById("saida").onclick = function(){

   
    var retornarHoras2 = document.getElementById("retorna-horario-de-saida");
    var valorAPagar = document.getElementById("valor-a-pagar");


    const agora = new Date();
    const horas = agora.getHours();
    const minutos= agora.getMinutes();
    const segundos = agora.getSeconds();
    const indice2 = [horas,":", minutos,":", segundos]    

    retornarHoras2.innerHTML = `Saida registrada as ${indice2[0]}:${indice2[2]}:${indice2[4]}`    

    //bloco para impedir que o botao registrar saida seja acionado antes de registrar a entrada.
    if(funçaoEntrada == null){
        alert("Por favor, registre a entrada do veiculo!")
    }else{
         tempo_estacionado = indice2[0] * 3600 + indice2[2] * 60 + indice2[4] - (funçaoEntrada[1][0] * 3600 + funçaoEntrada[1][2] * 60 + funçaoEntrada[1][4])
         minutos_estacionado = Math.floor(tempo_estacionado / 60)


        valorAPagar.innerHTML = `Tempo estacionado: ${minutos_estacionado} minutos`

    }

}
