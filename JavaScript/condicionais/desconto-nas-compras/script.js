var retorno = document.getElementById("retorno");

        function comCupom(){

            var valorGasto = document.getElementById("valorGasto").value
    valorGasto = parseFloat(valorGasto);
            
            if(valorGasto > 1000){
                descontar20 = valorGasto - (valorGasto * 20 /100)
                descontoComCupom = descontar20 - (descontar20 / 100 * 15)
                retorno.innerHTML="Total a se pagar R$" + descontoComCupom

            }else if(valorGasto >=500 && valorGasto <=1000){
                descontar10 = valorGasto - (valorGasto * 10 /100)
                descontoComCupom = descontar10 - (descontar10 * 15/100) 
                retorno.innerHTML="Total a se pagar R$" + descontoComCupom

            }else if(valorGasto>=200 && valorGasto<=499){
                descontar5 = valorGasto - (valorGasto*5/100)
                descontoComCupom = descontar5 - (descontar5*15/100)
                retorno.innerHTML="Total a se pagar R$" + descontoComCupom

            }else if(valorGasto<200 && valorGasto>=0){
                retorno.innerHTML="Cupom não aplicável em compras inferiores a R$200,00"

             }else{
                retorno.innerHTML="Valor incorreto, verifique o valor inserido"
            }
        }

        function semCupom(){

            var valorGasto = document.getElementById("valorGasto").value
    valorGasto = parseFloat(valorGasto);

            if(valorGasto > 1000){
                descontar20 = valorGasto - (valorGasto * 20 /100)
               
                retorno.innerHTML="Total a se pagar R$" + descontar20

            }else if(valorGasto >=500 && valorGasto <=1000){
                descontar10 = valorGasto - (valorGasto * 10 /100) 
                retorno.innerHTML="Total a se pagar R$" + descontar10

            }else if(valorGasto>=200 && valorGasto<=499){
                descontar5 = valorGasto - (valorGasto*5/100)
                retorno.innerHTML="Total a se pagar R$" + descontar5

            }else if(valorGasto<200 && valorGasto>=0){
                retorno.innerHTML="Valor a ser pago R$ "+ valorGasto
                
            }else{
                retorno.innerHTML="Valor incorreto, verifique o valor inserido"
            }
            
        }