

let  = null;

//Essa função é responsavel por registrar a placa e o horario da entrada do veiculo no estacionamento!
//função que é chamada quando o botão de entrada de veiculo for acionado.
function entrada(){
    //recebe a valor digitado no campo de placa e armazena na variavel placa
    var placa = document.getElementById('placa-do-carro').value.toUpperCase();


    //captura os elementos que serão alterados no html e armazena em variaveis
    var retornarPlaca = document.getElementById("retornar-placa")            
    var retornarHoras = document.getElementById("horario-de-entrada")


    //verificador do campo destinado a placa: se vazio, então ele retorna um alerta, caso receba um valor, executa o proximo bloco
    if (placa !== ""){        
        const agora = new Date();//cria um objeto com a data e hora atual
        const horas = agora.getHours(); //captura a hora atual
        const minutos= agora.getMinutes(); //captura os minutos atuais
        const segundos = agora.getSeconds(); //captura os segundos atuais
        const indice = [horas,":", minutos,":", segundos] //constante que armazena os valores das variaveis de cima em arrays.


        //constante que armazena os valores das variaveis de dentro da função em arrays.
        //const retornoF1 = [placa, indice]
        retornarPlaca.innerHTML = `<p>Placa do veiculo: <strong>${placa}</strong></p>`
        retornarHoras.innerHTML = `Entrada registrada as ${indice[0]}:${indice[2]}:${indice[4]}`
        return [placa, indice] //retorna a placa e o horario de entrada do veiculo quando a função é chamada.}

    } else {
        alert("Por favor, digite a placa do veiculo!") 
    }                 
}


//Executa uma função quando o botão "registrar entrada" for acionado
document.getElementById("entrada").onclick = function(){    

        // a variavel funçaoEntrada recebe o retorno da função entrada()
        funçaoEntrada = entrada()} 


//Executa uma função quando o botão "registrar saida" for acionado
document.getElementById("saida").onclick = function(){

    const agora = new Date(); //cria um objeto com a data e hora atual
    const horas = agora.getHours(); //captura a hora atual
    const minutos= agora.getMinutes(); //captura os minutos atuais
    const segundos = agora.getSeconds();//captura os segundos atuais
    const indice2 = [horas,":", minutos,":", segundos] //constante que armazena os valores das variaveis de cima em arrays.   


    //captura os elementos que serão alterados no html e armazena em variaveis
    var retornarHoras2 = document.getElementById("horario-de-saida");
    var valorAPagar = document.getElementById("valor-a-pagar");
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
