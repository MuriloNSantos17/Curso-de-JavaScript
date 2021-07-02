function tabuada()
{
    
    var numero = document.getElementById('txtNumero');
    var numeroCalc = Number(numero.value);

    if(numero.value.length==0 || numeroCalc <=0)
    {
        window.alert('[ERRO ] - Número em branco, Nulo ou negativo')
    }
    else
    {
       

        var select = document.getElementById('select');

        var resultado = '';

        var i=1;

        while(i<=10)
        {
            
            var calculo = numeroCalc * Number(i);

            resultado = resultado + `<option>${numero.value} x ${i} = ${calculo}</option>`;

            i++;
        }



        select.innerHTML = resultado;

    }
    
    
   
    
}