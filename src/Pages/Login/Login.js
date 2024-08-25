import './Login.css';
import logo_bg from '../../Images/icon_azul_1.png'
import logo_form from '../../Images/logo_hori_azul 1.png'

function Login() {
    return (
        <>
            <body>
                <form className='form_login'>
                    <header>
                        <img src={logo_form} className='logo_form'/>
                    </header>
                    <main>
                        <input type='text' placeholder='Login' />
                        <input type='password' placeholder='Senha' />
                        <p>Esqueci minha senha</p>
                        <input type='button' value='Entrar'/>
                    </main>
                    <footer>
                        <input type='button' value='Fale conosco'/>
                    </footer>
                </form>
            </body>
        </>
    )
}

export default Login;