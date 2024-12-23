function multiplicarValor(){
    let quantiaDeLaranjas=document.getElementById("quantiaDeLaranjas").value;
    let total = parseInt(quantiaDeLaranjas) * 0.30;
    let retorno = document.getElementById("retorno")
        retorno.innerHTML="O valor total a pagar é de <span>" + total + " Reais</span>"
}