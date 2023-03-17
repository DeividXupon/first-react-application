import './CampoTexto.css'

const CampoTexto = (props) => {

    const labelFormatada = (props.obrigatorio) ? `${props.label} *` : props.label;

    return (
        <div className="campo-texto">
            <label>{labelFormatada}</label>
            <input 
            value={props.valor} 
            onChange={evento => props.aoAlterar(evento.target.value)} 
            required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto