import styles from './LoginContainer.module.css'
import logo from '../assets/svgs/trek-blue.svg?url'

export function LoginContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo"/>
                Task<span>Trek</span>
            </div>

            <div className={styles.login}>
                <h1>Bem vindo!</h1>
                <form>
                    <input type="email" placeholder="Email" className='form-control'/>
                    <input type="password" placeholder="Password" className='form-control'/>
                    <a href="#" className={styles.forgot}>Esqueci minha senha</a>
                    <button type="submit" className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    )
}