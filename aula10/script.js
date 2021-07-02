function contar()
{
    var inicio = document.getElementById('txtInicio');

    var fim = document.getElementById('txtFim');

    var passo = document.getElementById('txtPasso');

    var resposta = document.getElementById('res');


    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0)
    {
        alert('[ERRO] - Verifique os valores e tente novamente!');
    }
    else
    {
        var texto='';
    
        var contInicio = Number(inicio.value);
        var contFinal = Number(fim.value);
        var passoNumber = Number(passo.value);

        if(passoNumber <=0)
        {
            alert('[ERRO] - Passo inválido');
            passoNumber = 1;
        }

        if(contFinal <= contInicio)
        {
            resposta.innerHTML ='ERRO: Impossível contar';
        }
        else
        {
            while(contInicio <= contFinal)
            {
                texto = texto + contInicio + ' &#x1F449; ';
                contInicio+=passoNumber;
            }
        
            resposta.innerHTML = `${texto} &#x1F3C1;`;
        }   
    }

   
    
}