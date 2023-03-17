import { TbTrashXFilled } from 'react-icons/tb';
import hexToRgba from 'hex-to-rgba';
import './CardColaborados.css'

const CardColaborados = (props) => {
    return (
        <div className='card'>
            <TbTrashXFilled className='deletar' onClick={() => {props.aoDeletar(props.id)}} />
            <div className='card-img' style={{backgroundColor: props.cor}}>
                <div className='imagem' style={{border: `3px solid ${props.cor}`, boxShadow: `inset 80px 80px 10px ${hexToRgba(props.cor, 0.3)}`, backgroundColor: props.cor, backgroundImage: 'url(/img/usuario.png)'}}>
                    <div className='icone' style={{backgroundImage: `url(${props.imagem})`}}></div>
                </div>
            </div>
            <div className='card-conteudo' >
                <h3 className='conteudo-titulo'>{props.nome}</h3>
                <p className='conteudo-paragrafo'>{props.cargo}</p>
            </div>
        </div>
    )
}

export default CardColaborados