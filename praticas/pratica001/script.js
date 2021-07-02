function somaValores()
{
    var n1= window.prompt("Entre com o número 1: ");
    let n2 = window.prompt("Entre com o valor 2: ");

    let soma = Number.parseInt(n1) + Number.parseInt(n2);

    window.alert(`O Resultado da soma é: ${soma}`);
}

function subtrairValores(){

    let n1 = window.prompt("Entre com o Valor 1: ");
    let n2 = window.prompt("Entre com o segundo Valor: ");

    var calculo = Number(n1) - Number(n2);

    window.alert("O resultado da subtração é: "+calculo);
}

function multiplicaValores(){

    var n1 = window.prompt("Entre com o valor 1: ");
    var n2 = window.prompt("Entre com o Valor 2: ");

    var x = Number(n1) * Number(n2);

    window.alert(`O resultado da multiplicação é: ${x}`)
}

function divideValores(){
    
    var n1 = window.prompt("Entre com o Valor 1: ");
    var n2 = window.prompt("Entre com o valor 2: ");

    var calc = Number.parseFloat(n1) / Number.parseFloat(n2);

    window.alert('O Resultado do cálculo é: '+calc.toFixed(1))
}


function converteString()
{
    var n1 = prompt('Digite o Valor a ser convertido');

    var valor = n1.toString();

    alert(`Valor convertido: ${valor}`);
}

function converterParaReal()
{
    var n1 = prompt('Digite o valor a ser convertido para real');

     n1.toLocaleString('pt:BR',{style: 'currency', currency: 'BRL'});

    window.alert(`Resultado: ${n1
    }`);
}