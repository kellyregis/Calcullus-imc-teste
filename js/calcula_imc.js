function calculaImc(peso,altura) {
    var altura = altura/100;
    var resultado = (peso/(altura*altura)).toFixed(2);
    switch (verificaImc(resultado)) {
        case 1: 
            alert("IMC = "+resultado+"\n\nAbaixo do peso ideal.");
            break;
        
        case 2: 
            alert("IMC = "+resultado+"\n\nParabéns! Você está com o peso ideal.");
            break;
            
        case 3: 
            alert("IMC = "+resultado+"\n\nVocê está com sobrepeso");
            break;
            
        case 4: 
            alert("IMC = "+resultado+"\n\nObesidade grau 1");
            break;
    
        case 5: 
            alert("IMC = "+resultado+"\n\nObesidade grau II");
            break;   
            
        case 6: 
            alert("IMC = "+resultado+"\n\nObesidade grau III");
            break;
    
    }  
    
}

function limpaTela () {
   window.location.reload(); 
  
}

function verificaImc (imc) {
    if (imc < 18) {
        return 1;
    }
    
    if (imc >= 18 && imc <25) {
        return 2;
    }
    
    if (imc >= 25 && imc < 30) {
        return 3;
    }
    
    if (imc >=30 && imc < 35) {
        return 4;
    }
    
    if (imc >=35 && imc<40) {
        return 5;
    }
    
    if (imc>=40) {
        return 6;
    }  
    
}
