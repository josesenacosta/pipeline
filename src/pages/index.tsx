import styles from '@/styles/Home.module.css'
import InputField from '@/components/InputField'
import { useState } from 'react'



export default function Home() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')


  return (
    <div className={styles.container}>
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
      </div>
    </div>

  )
}
