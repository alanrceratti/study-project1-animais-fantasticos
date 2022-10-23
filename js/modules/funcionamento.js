  //funcao do FAQ das perguntas
  export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  /*   split cria uma array e .map com numbers faz a array virar numerica e nao string */
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
  }
  }


