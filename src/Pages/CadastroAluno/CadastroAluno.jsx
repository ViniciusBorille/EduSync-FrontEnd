import React, { useState } from 'react';
import './CadastroAluno.css';

function CadastroAluno(){

    const [formAluno, setFormAluno] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        telefone2: '',
        mae: '',
        pai: '',
        
    })
    return(
        <div className='page-container'> 
            <form className='form-container'>
                <input
                type="text"
                name="nome"
                className="form-input"
                value={formAluno.nome}
                placeholder="Nome"
                />
            </form>
        </div>
    )
}
export default CadastroAluno;