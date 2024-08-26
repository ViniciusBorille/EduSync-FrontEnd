import './Login.css';

import logo_form from '../../Images/logo_hori_azul 1.png'

function Login() {
    return (

        <>
            <div className='body_login'>

                <form className='form_login'>
                    <header className='header_login'>
                        <img src={logo_form} className='logo_form_login'/>
                    </header>
                    <main className='main_form_login'>
                        <input type='text' className='input_form' placeholder='Login' />
                        <input type='password' className='input_form' placeholder='Senha' />
                        <p>Esqueci minha senha</p>
                        <input type='button' value='Entrar'/>
                    </main>
                    <footer className='footer_form_login'>
                        <input type='button' value='Fale conosco'/>
                    </footer>
                </form>
            </div>
          </>
    )
}

export default Login;