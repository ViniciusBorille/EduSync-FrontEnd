import './Cadastro.css';

function Cadastro(){
    return(
    <>
        <body>
            <form>
                <h1>
                    Cadastre-se
                </h1>
                <input type='text' id='nome' placeholder='Nome*' required/>
                <input type='text' id='cpf' placeholder='CPF*' required/>
                <input type='date' id='dt_nasc' placeholder='Data de Nascimento*' required/>
                <input type='text' id='endereco' placeholder='Endereço'/>
                <input type='text' id='email' placeholder='Email'/>
                <input type='text' id='confEmail' placeholder='Confirmar email'/>
                <input type='tel' id='tel' placeholder='Telefone'/>
                <input type='tel' id='tel2' placeholder='Telefone'/>
                <input type='text' id='mae' placeholder='Mãe'/>
                <input type='text' id='pai' placeholder='Pai'/>
                <input type='text' id='turma' placeholder='Turma*' required/>
            </form>
        </body>
    </>
    )
}

export default Cadastro;