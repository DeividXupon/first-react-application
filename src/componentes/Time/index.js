import CardColaborados from '../CardColaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {


    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: hexToRgba(props.cor, 0.4), backgroundImage: 'url(/img/fundo.png)'}}>
            <h3 className='titulo'>{props.nome}</h3>
            <hr size="5" width="6%" align="center" color={props.cor}></hr>
            <input onChange={evento => props.aoMudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='cor' />
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => 
                    <CardColaborados 
                        key={colaborador.id} 
                        id={colaborador.id} 
                        cargo={colaborador.cargo} 
                        nome={colaborador.nome}  
                        imagem={colaborador.imagem}  
                        cor={props.cor}
                        aoDeletar={props.aoDeletar}
                    />
                )}
            </div>
        </section> 
        : ''
    )
}

export default Time