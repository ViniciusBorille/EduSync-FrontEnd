import './Cadastro.css';

function Cadastro(){
    return(
    <>
        <body>
            <form>
                <h1>
                    Cadastre-se
                </h1>
                <input type='text' id='nome' placeholder='Nome'/>
                <input type='text' id='cpf' placeholder='CPF'/>
                <input type='text' id='email' placeholder='Email'/>
                <input type='text' id='confEmail' placeholder='Confirmar email'/>
                <input type='tel' id='tel' placeholder='Telefone'/>
                <input type='tel' id='tel2' placeholder='Telefone'/>
                <input type='date' id='' placeholder='Data de Nascimento'/>
                <input type='text' id='' placeholder=''/>
                <input type='text' id='' placeholder=''/>
                <input type='text' id='' placeholder=''/>
                <input type='text' id='' placeholder=''/>
            </form>
        </body>
    </>
    )
}

export default Cadastro;