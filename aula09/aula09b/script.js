function carregar()
{
    var dataAtual = new Date();
    var hora = dataAtual.getHours();

    var img = document.getElementById('imgPeriodo');
    var msg = document.getElementById('msg');
    var corpo = document.body;


    msg.innerText = `Agora são ${hora} horas`;

    

    if(hora <=8 && hora <12)
    {
        
        img.src = 'images/dia.png';
        corpo.style.background = 'rgb(34, 187, 187)';
    }
    else if(hora >=12 && hora <18)
    {
       
        img.src = 'images/tarde.png';
        corpo.style.background="orange";
    }
    else
    {
       
        img.src = 'images/noite.png';
        corpo.style.background='gray';
    }
}
