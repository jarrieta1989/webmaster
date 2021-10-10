import Navbar from '../components/navbar';
import google from '../media/google.png';
import login from '../styles/login.css';

function Login(){
    return(
        <div>
            <Navbar/>
            <div class="login-container">
            <div class="login-info-container">
                <h1 class="title"> Iniciar sesión</h1>
                <div class="social-login">
                    <div class="social-login-element">
                        <img src={google} alt="google-image" />
                        <span>Google</span>
                    </div>
                </div>
            
                <form class="inputs-container">
                    <input class="input" type="email" placeholder="Usuario"/>
                    <input class="input" type="password" placeholder="Contraseña"/>
                    <p>  <span class="span"> ¿Olvidaste tu contraseña? 

                    </span></p>
                    <button class="btn">Iniciar sesion </button>
                    <p> ¿No eres cliente aún? <span class="span"> Registrate</span></p>
                </form>
            </div>
                
            </div>
        </div>
    );
}

export default Login;