function verificar()
{
    var data = new Date();

    var anoAtual = data.getFullYear();

    var fAno = document.getElementById('txtAno');

    var resposta = document.getElementById('res');

    if(fAno.value.length ==0 || fAno.value > anoAtual)
    {
        window.alert('[Erro]: Verifique os dados e tente novamente');
    }
    else
    {
        var idade = anoAtual - Number(fAno.value);

        var radio = document.getElementsByName('radsex');
        

        var img = document.createElement('img');

        img.setAttribute('id','foto');

    

        var genero='';

        if(radio[0].checked)
        {
            genero='Homem';

            if(idade==0 || idade <=12)
            {
                img.setAttribute('src','images/homem-c.png');
            }
            else if(idade <18)
            {
                img.setAttribute('src','images/homem-a.png');
            }
            else if(idade <65)
            {
                img.setAttribute('src','images/homem-ad.png');
            }
            else 
            {
                img.setAttribute('src','images/homem-v.png');
            }

        }
        else if(radio[1].checked)
        {
            genero = 'Mulher';

            if(idade==0 || idade <=12)
            {
                img.setAttribute('src','images/mulher-c.png');
            }
            else if(idade <18)
            {
                img.setAttribute('src','images/mulher-a.png');
            }
            else if(idade <65)
            {
                img.setAttribute('src','images/mulher-ad.png');
            }
            else 
            {
                img.setAttribute('src','images/mulher-v.png');
            }
        }

        resposta.style.textAlign = 'center';

        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`;

        resposta.appendChild(img);
    }
}