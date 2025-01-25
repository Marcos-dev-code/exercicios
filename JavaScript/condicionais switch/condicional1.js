debugger
var corrida=window.prompt("Qual o valor da corrida?")
    corrida = parseFloat(corrida)

var distancia = window.prompt("serão rodados quantos kms?")
    distancia = parseFloat(distancia)

var valorPorKm = corrida / distancia
 
if(valorPorKm >=1 && valorPorKm <=1.9){
    var indice =1
}else if (valorPorKm >=2){
    var indice =2
}else{
    var indice = 0
}

switch (indice){
    case 1:
        window.alert("Ganho razoavel, pagando um real ou um pouco mais por km")
    break;
    
    case 2:
    window.alert("Aplicativo pagando bem, bora correr")
    break;

    case 0:
        window.alert("Corrida com valor barato. Não compensa")
    break
    
    case isNaN(valorPorKm):
        window.alert("Por favor, digite corretamente")
    break;
    default: 
        window.alert("sei lá oque aconteceu")

}