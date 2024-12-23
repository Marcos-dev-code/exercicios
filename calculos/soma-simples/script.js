function somar(){
    let numero_A=document.getElementById("numero_A").value
    let numero_B=document.getElementById("numero_B").value
    let soma=parseFloat(numero_A) + parseFloat(numero_B);
    let retorno=document.getElementById("retorno");
        retorno.innerHTML="O resultado da soma é "+ soma;
                    }   