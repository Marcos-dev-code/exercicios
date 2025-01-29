//debugger


//Essa função é responsavel por registrar a placa e o horario da entrada do veiculo no estacionamento!
//função que é chamada quando o botão de entrada de veiculo for acionado.
function entrada(){
    var placa = document.getElementById('placa-do-carro').value.toUpperCase(); // captura o valor dentro do elemento selecionado pelo id.
    var retorno = document.getElementById("retorno")            //captura o elemento selecionado pelo id
    var hora_da_entrada =document.getElementById("retorna-horario-de-entrada")

    //verificador do campo destinado a placa: se vazio, então ele retorna um alerta, caso receba um valor, executa o proximo bloco
    if (placa == ""){
    alert("Por favor, digite a placa do veiculo!")
    
    // esse bloco só é executado se o campo destinado a placa for preenchido.

    }else{
        //bloco que captura o horario atual é salva em uma variavel.
        const agora = new Date();

        const horas = agora.getHours();
        const minutos= agora.getMinutes();
        const segundos = agora.getSeconds();

        const hora_formatada = horas + minutos + segundos

        retorno.innerHTML = `<p>Placa registrada: <strong>${placa}</strong></p>`
        hora_da_entrada.innerHTML = ``                      
       
    }    
    
                  
}

