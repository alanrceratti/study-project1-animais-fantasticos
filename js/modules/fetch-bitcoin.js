  //funcao do FAQ das perguntas
  export default function initFetchBitcoin() {

  }

  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (25 / bitcoin.GBP.sell).toFixed(4);   
  }).catch(erro => {
    console.log(Error(erro));
  });


/*   https://blockchain.info/ticker */