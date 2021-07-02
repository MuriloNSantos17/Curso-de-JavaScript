let num=[5,1];


num[2] = 6;


console.log(`O Vetor é: ${num}`);

num.push(7);

console.log(`Agora o Vetor é ${num}`);

console.log(`O Tamanho do vetor é ${num.length}`);


console.log(`O Vetor ordenado é ${num.sort()}`)

for(var i=0; i<num.length; i++)
{
    console.log(`Número da posição ${i} é: ${num[i]}`);
}

console.log('FOR MORE EASY');

for(let i in num)
{
    console.log(`VETOR EASY: ${num[i]}`);
}