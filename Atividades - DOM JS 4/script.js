
    
    
    
    function calcularMedia(){
    var nota1 = Number(document.getElementById('nota1').value);
    var nota2 = Number(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;
    var resultadoMedia = document.getElementById('resultadoMedia');
    var aprovado = 7;
    var reprovado = 5;
        if(media > aprovado){
            resultadoMedia.innerHTML = `Sua média: ${media} está aprovado!`;
            resultadoMedia.style.color = 'green';
        }else if(media< reprovado){
            resultadoMedia.innerHTML = `Sua média: ${media} está reprovado!`
            resultadoMedia.style.color ='red';
        }else{
            resultadoMedia.innerHTML = `Sua média: ${media} está em recuperação!`
            resultadoMedia.style.color = 'orange';
        }

       
    }