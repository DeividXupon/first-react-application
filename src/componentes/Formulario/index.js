import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

import CampoTexto from '../CampoTexto';
import ListaSuspenca from '../ListaSuspenca';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')

    const onSibmit = (evento) => {
        evento.preventDefault();
        props.aoCadastroFinalizado({
            nome,
            cargo,
            imagem,
            tipo,
            id: uuidv4()
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTipo('');
    }

    return(
        <section className="formulario">
            <form onSubmit={onSibmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true}  label="Nome" 
                    placeholder="Digite o seu nome" valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} label="Cargo" 
                    placeholder="Digite seu cargo" valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={false} label="Imagem" 
                    placeholder="Informe o endereço da imagem" valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspenca 
                    obrigatorio={true} label="Time" 
                    itens={props.times} valor={tipo}
                    aoAlterar={valor => setTipo(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
} 

export default Formulario