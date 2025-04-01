import styles from './LoginContainer.module.css'
import logo from '../assets/svgs/trek-blue.svg?url'
import { useState } from 'react'

export function LoginContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (


        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo"/>
                Task<span>Trek</span>
            </div>

            <div className={styles.login}>
                <h1>Bem vindo!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" className='form-control' onChange={handleEmailChange}/>
                    <input type="password" placeholder="Password" className='form-control' onChange={handlePasswordChange}/>
                    <a href="#" className={styles.forgot}>Esqueci minha senha</a>
                    <button type="submit" className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    )
}