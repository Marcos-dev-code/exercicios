function mediaDeGanhosMensais(){
    let ganhoBruto =document.getElementById("ganhoBruto").value;
    let despesaTotal =document.getElementById("despesaTotal").value;
    let valorProcessado = (parseFloat(ganhoBruto)-parseFloat(despesaTotal))/12;
    let textoDeRetorno =document.getElementById("retorno");
    textoDeRetorno.innerHTML="Sua empresa lucrou r$ "+valorProcessado+" por mês em média"
    
}