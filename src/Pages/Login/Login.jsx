import './Login.css';
import Button from '../../Componentes/button/Button'
import logo_form from '../../Images/logo_tracado_1.png'

function Login() {
    return (

        <>
            <div className='body_login'>

                <form className='form_login'>
                    <header className='header_login'>
                        <img src={logo_form} className='logo_form_login' />
                    </header>
                    <main className='main_form_login'>
                        <input type='text' className='input_form' placeholder='Login' />
                        <input type='password' className='input_form' placeholder='Senha' />
                        <section className='sec_login'>
                            <p className=''>Esqueci minha senha</p>
                            <Button label='Entrar' className='btn_entrar' />
                        </section>
                    </main>
                    <footer className='footer_form_login'>
                        <Button label='Fale conosco' className='btn_fale' />
                    </footer>
                </form>
            </div>
        </>
    )
}

export default Login;