const calcular = document.getElementById("Calcular-IMC");
    

function imc (){

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    
    if (nome !== "" && altura !== "" && peso !== "") { 
        const Imc= (peso/ (altura*altura)).toFixed(2);
        
        resultado.textContent = nome + ", seu IMC é " + Imc;

    }else{
        resultado. textContent = "preencha todos os campos!";
    }

}

calcular.addEventListener("click", imc);


    
