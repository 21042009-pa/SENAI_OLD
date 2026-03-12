// --- SELEÇÃO COM QUERY SELECTOR (O padrão moderno) ---

// 1. Especificidade total: Buscando o h3 apenas dentro de um ID específico
// Isso evita pegar o h3 da Lasanha por engano.
const tituloNhoque = document.querySelector('#card-nhoque h3');

// 2. Selecionando múltiplos elementos: Todos os botões que têm a classe .btn-pedido
const botoesCompra = document.querySelectorAll('.btn-pedido');

// 3. Selecionando por atributo (Ex: pegar a imagem pelo 'alt')

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

const terceiroCard = document.querySelector('.card:nth-child(3)') //mostrar o quarto card

console.log('Mostrando o titulo nhoque', tituloNhoque)
console.log('quantidade de botôes de pedido', botoesCompra.length)
console.log('quarto card', terceiroCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')

saudacao.textContent = hora < 18 ? "bem vindo, boa tarde!" :
"bem vindo, boa noite"