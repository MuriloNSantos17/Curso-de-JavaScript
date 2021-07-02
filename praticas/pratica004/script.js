function validarIdade()
{
    var data = new Date();

    var ano = data.getFullYear();

    var anoDigitado = document.getElementById('txtAno');

    //alert('ano '+ano);

    //alert('ano digitado: '+anoDigitado.value);

    var radio = document.getElementById('rbMasc');

    var divResultado = document.getElementById('msg');


    if
    (
        Number(anoDigitado.value) > ano ||   anoDigitado.value.lenght == 0
    )
    {
        alert('[Erro] - Não foi possivel validar a idade!')
    }
    else
    {
        var genero='';

        var idade = Number(ano) - Number(anoDigitado.value);

        var imgCriada = document.createElement('img');

        imgCriada.setAttribute('id','imgResultado');

       if(radio.checked)
       {
           genero='Homem';

            if(idade<12)
            {
                imgCriada.setAttribute('src','images/homem-c.png')
            }
            else if(idade<=18)
            {
                imgCriada.setAttribute('src','images/homem-a.png')
            }
            else if(idade<65)
            {
                imgCriada.setAttribute('src','images/homem-ad.png')
            }
            else
            {
                imgCriada.setAttribute('src','images/homem-v.png')
            }
       }
       else
       {
            if(idade<12)
            {
                imgCriada.setAttribute('src','images/mulher-c.png')
            }
            else if(idade<=18)
            {
                imgCriada.setAttribute('src','images/mulher-a.png')
            }
            else if(idade<65)
            {   
                imgCriada.setAttribute('src','images/mulher-ad.png')
            }
            else
            {   
                imgCriada.setAttribute('src','images/mulher-v.png')
            }
            genero ='Mulher';
       }
       
       

       
       imgCriada.style.margin='20px';

       divResultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
       
       divResultado.appendChild(imgCriada);



    }
    

    
}