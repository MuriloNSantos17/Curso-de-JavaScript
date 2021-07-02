function ex1()
{
    var nacionalidade = document.getElementById('txtNacionalidade');

    var resultado = document.getElementById('resultado');

    alert("Resultado: "+nacionalidade.value);

    resultado.innerText = resultado.textContent +=
    ` ${nacionalidade.value}`;

    if(nacionalidade.value === "Brasil")
    {
        alert("Você é Brasileiro");
    }
}

function ex2()
{
    var x = document.getElementById('txtIdade');

    var idade = Number(x.value);

    if(idade <16) 
    {
        alert("Voto não é permitido!");
    }
    else if(idade <18 || idade >=65)
    {
        alert("Voto Opcional");
    }
    else{
        alert("Voto Obrigatório");
    }
}

function ex3()
{
    var agora = new Date();

    var hora = agora.getHours();
    var corpo = document.body;

    if(hora > 8 && hora <12)
    {
        corpo.style.background = 'blue';
        alert(`Bom Dia são ${hora} horas`);
    }
    else if(hora >=12 && hora<18)
    {
        corpo.style.background = 'orange';
        alert(`Boa Tarde São ${hora} horas`);
    }
    else if(hora >=18 && hora<=23)
    {
        corpo.style.background = 'black';
        alert(`Boa Noite São ${hora} horas`);
    }
    else{
        corpo.style.background='gray';
        alert(`Boa Madrugada são ${hora} horas`);
    }
}

function ex4()
{
    var x = new Date();

    var dia = x.getDay();
    	
    
    var diaFinal=null;

    switch(dia)
    {
        case 0:
            diaFinal="Domingo";
        break;
        
        case 1:
            diaFinal ="Segunda-Feira";
        break;

        case 2:
            diaFinal = "Terça-Feira";
        break;

        case 3:
            diaFinal="Quarta-Feira";
        break;

        case 4:
            diaFinal="Quinta-Feira";
        break;

        case 5:
            diaFinal="Sexta-Feira";
        break;

        case 6:
            diaFinal="Sábado";
        break;

        default:
            diaFinal="Erro";
        break;
    }

    alert(`Hoje é ${diaFinal}`);
    /*
        0 - DOMINGO
        1 - SEGUNDA
        2 - TERÇA
        3 - QUARTA
        4 - QUINTA
        5 - SEXTA
        6 - SÁBADO
    */
}