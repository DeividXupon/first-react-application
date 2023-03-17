import './ListaSuspenca.css'

const ListaSuspenca = (props) => {

    const labelFormatada = (props.obrigatorio) ? `${props.label} *` : props.label;

    return (
        <div className="campo-listasuspenca">
            <label>{labelFormatada}</label>

            <select onChange={evento => props.aoAlterar(evento.target.value)} 
            required={props.obrigatorio} value={props.valor}>
                <option> </option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspenca