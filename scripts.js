const inputString = 'Gurinhém....';
const resultado = removePontosEspeciais(inputString);

function removePontosEspeciais(str) {
  const cleanStr = str.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
  return cleanStr;
}

let chave = '4a0824e92a4134d9835235ea8ec45436';

function colocarNaTela(dados) {
  document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name;
  document.querySelector('.temp').innerHTML =
    Math.floor(dados.main.temp) + 'ºC';
  document.querySelector('.descricao').innerHTML = dados.weather[0].description;
  document.querySelector('.umidade').innerHTML =
    'Umidade ' + dados.main.humidity + '%';
  document.querySelector('.icone').src =
    'https://openweathermap.org/img/wn/' + dados.weather[0].icon + '.png';
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cidade +
      '&appid=' +
      chave +
      '&lang=pt_br' +
      '&units=metric'
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value;

  if (cidade.trim() === '') {
    alert('Por favor, insira o nome de uma cidade antes de pesquisar.');
    return;
  }

  buscarCidade(cidade);
}
