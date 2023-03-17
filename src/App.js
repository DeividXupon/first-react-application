import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Formulario
  function salvaColaboradorNaLista(colaborador){
    setColaboradores([...colaboradores, colaborador])
  }

  // Time
  const [colaboradores, setColaboradores] = useState([{
    nome: 'Deivid',
    cargo: 'Estagiario',
    imagem: 'https://github.com/DeividXupon.png',
    tipo: 'Front-End',
    id: uuidv4()
  }])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  function deletarColaborador(id) {
    console.log(`Delatar colaborador ${id}`)

    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function alteraCorTime(cor, id) {
    setTimes(
      times.map(time => {
        if(time.id === id){
          time.cor = cor
        }
        return time
      })
    )
    
    
  }

  return (
    <div className="App">
      <Banner />

      <Formulario times={times.map(time => time.nome)} 
      aoCadastroFinalizado={colaborador => salvaColaboradorNaLista(colaborador)}/>

      {times.map((time, indice) => 
        <Time 
          key={indice} 
          nome={time.nome} 
          cor={time.cor} 
          id={time.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.tipo === time.nome)}
          aoDeletar={deletarColaborador}
          aoMudarCor={alteraCorTime}
        />
      )}

      <Rodape />
        
    </div>
  )
}

export default App;
