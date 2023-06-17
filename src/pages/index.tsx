import styles from '@/styles/Login.module.css'
import InputField from '@/components/InputField'
import { useState } from 'react'
import Button from '@/components/Button';
import { useRouter } from 'next/router';


export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const router = useRouter();


  const handleSubmit = () => {
    router.push('/dashboard')
  }

  const handleSingup = () => {
    console.log('Cadastrou')

  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Pipeline</div>
      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <InputField
            placeholder='Digite seu usuário'
            value={user}
            onChange={setUser}
          />
        </div>
        <div className={styles.inputArea}>
          <InputField
            placeholder='Digite sua senha'
            value={password}
            onChange={setPassword}
            isPassword
          />
        </div>
        <div className={styles.inputArea}>
          <Button color="#A9DFD8" label='Entrar' fill={true} onClick={handleSubmit} />
        </div>
      </div>
      <div className={styles.forgetArea}>
        Esqueceu sua senha? Clique Aqui.
      </div>
      <div className={styles.singupArea}>
        <Button color="#A9DFD8" label='Quero me cadastrar' onClick={handleSingup} />
      </div>
    </div >

  )
}
