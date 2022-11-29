const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const pegaTexto = document.getElementById('texto-pretexto');

numeroTitulo.innerHTML = numero;
pegarTexto.innerHTML = '';
pegaTexto.innerHTML += `Raiz Quadrada${numero ** 0.5}</strong><br />`;
pegaTexto.innerHTML += `É NaN: ${Number.isNaN(numero)}</strong><br />`;
pegaTexto.innerHTML += `${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong> <br />`;
pegaTexto.innerHTML += `Arrendondando para baixo: <strong>${Math.floor(numero)}</strong><br />`;
pegaTexto.innerHTML += `Arrendondando para cima: <strong>${Math.ceil(numero)}</strong><br />`;
pegaTexto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br />`;