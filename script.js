let refrigerante = 11.99;
let macarrao = 6.99;
let ervilha = 6.99;
let arroz = 22.99;
let feijao = 11.89;
let vinho = 70.00;



let totalMenosVinho = 3*refrigerante + 4*macarrao + 3*ervilha + 3*arroz + 2*feijao;
let totalMenosVinhoFormatado = totalMenosVinho.toLocaleString('pt-BR', {style: "currency", currency: "BRL"});

let totalMaisVinho = 3*refrigerante + 4*macarrao + 3*ervilha + 3*arroz + 2*feijao + 3*vinho;
let totalMaisVinhoFormatado = totalMaisVinho.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 


if (totalMaisVinho % 2 == 0) {
    let eu = totalMenosVinho/2;
    let euPrecoFormatado = eu.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

    let amigo = total/2;
    let amigoPrecoFormatado = amigo.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 
    
    console.log("O valor do vinho não foi dividido entre os dois")
    console.log(eu)
    console.log(amigo)

} else {
    let eu = totalMaisVinho/2;
    let euPrecoFormatado = eu.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

    let amigo = totalMaisVinho/2;
    let amigoPrecoFormatado = amigo.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 


    console.log("O valor do vinho foi dividido entre os dois")
    console.log(euPrecoFormatado)
    console.log(amigoPrecoFormatado)
}



// EXTRA
// ===========================================================

let precoRefrigerante = prompt("Digite o valor do refrigerante");
let quantidadeRefrigerante = prompt ("Quantas unidades?");

let precoMacarrao = prompt("Digite o valor do macarrão")
let quantidadeMacarrao = prompt("Quantas unidades?");

let precoErvilha = prompt("Digite o valor da ervilha")
let quantidadeErvilha = prompt("Quantas unidades?");

let precoArroz = prompt("Digite o valor do arroz");
let quantidadeArroz = prompt("Quantas unidades?");

let precoFeijao = prompt("Digite o valor do feijão");
let quantidadeFeijao = prompt("Quantas unidades?");

let precoVinho = prompt("Digite o valor do quilo do bolo de rolo");
let quantidadeVinho = prompt("Quantas unidades?");
let totalVinho = precoVinho*quantidadeVinho;
let totalVinhoFormatado = totalVinho.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 


let totalSemVinho = precoRefrigerante*quantidadeRefrigerante + precoMacarrao*quantidadeMacarrao + precoErvilha*quantidadeErvilha + precoArroz*quantidadeArroz + precoFeijao*quantidadeFeijao;
let totalSemVinhoFormatado = totalSemVinho.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

let totalComVinho = precoRefrigerante*quantidadeRefrigerante + precoMacarrao*quantidadeMacarrao + precoErvilha*quantidadeErvilha + precoArroz*quantidadeArroz + precoFeijao*quantidadeFeijao + totalVinho;
let totalComVinhoFormatado = totalComVinho.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 



if (totalComVinho % 2 == 0) {
    let euDinamico = totalSemVinho/2;
    let euDinamicoFormatado = euDinamico.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

    let amigoDinamico = totalSemVinho/2 + totalVinho;
    let amigoDinamicoFormatado = amigoDinamico.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 
    
    alert(`Como o total ${totalComVinhoFormatado} é par, então o valor do bolo de rolo que deu ${totalVinhoFormatado} não foi dividido entre os dois. 
    Eu devo pagar ${euDinamicoFormatado} e você ${amigoDinamicoFormatado}`)
  

} else {
    let euDinamico = totalComVinho/2;
    let euDinamicoFormatado = euDinamico.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

    let amigoDinamico = totalComVinho/2;
    let amigoDinamicoFormatado = amigoDinamico.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}); 

    alert(`Como o total ${totalComVinhoFormatado} é ímpar, então o valor do bolo de rolo que deu ${totalVinhoFormatado} foi dividido entre os dois. 
    Eu devo pagar ${euDinamicoFormatado} e você ${amigoDinamicoFormatado}`)
}
