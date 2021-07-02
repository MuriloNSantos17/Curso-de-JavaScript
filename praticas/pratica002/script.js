function ex1(){
    var corpo = document.body;

    corpo.style.background="pink";
}

function ex2(){
    var h1 = document.getElementById('h1Principal');

    h1.innerText = "TESTADO O DOM";
}

function ex3()
{
    var p1 = document.getElementsByTagName('p')[0];

  

    var texto = `Olá ${p1.innerText}`;

    p1.innerText = texto;
   
}