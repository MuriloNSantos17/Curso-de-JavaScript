function validaHora()
{
    var data = new Date();

    var hora = data.getHours();

    var corpo = document.body;

    var res = document.getElementById('resposta');

    hora = Number(hora);
    

    var img = document.getElementById('imgResposta');

    alert('hora '+hora);

    if(Number(hora)<12)
    {
        res.innerHTML = `Agora são ${hora} horas`;

        corpo.style.background = 'brown';
    }
    else if(Number(hora)<=18)
    {
        res.innerHTML = `Agora são ${hora} horas`;

        corpo.style.background = 'orange';

        img.src="images/tarde.png";
    }
    else
    {
        res.innerHTML = `Agora são ${hora} horas`;

        corpo.style.background='gray';

        img.src = "images/noite.png";
    }
}