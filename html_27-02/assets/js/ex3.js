function mostrar(){
    var nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value; 
    nascimento = document.getElementById("nascimento").value;
    dia = nascimento.substring(8,10);
    mes = nascimento.substring(5,7);
    ano= nascimento.substring(0,4);
    nascimento = dia + "/" + mes + "/" + ano;
    sexo = document.querySelector("input[name='sexo']:checked").value;

    var almoco = document.getElementById("almoco").checked
    if (almoco==true){
        almoco="Sim"
    }
    else{
        almoco="Não"
    }

    var vt = document.getElementById("vt").checked
    if (vt==true){
        vt="Sim"
    }
    else{
        vt="Não"
    }
    
    alert("Nome: " + nome + "\nIdade: " + idade + "\nData de Nascimento: " + nascimento + "\nSexo: " + sexo + "\nAlmoço: " + almoco + "\nVale Transporte: " + vt) 
}
