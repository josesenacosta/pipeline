import { useState } from 'react';
import styles from './InputField.module.css'
import EyeClosed from './EyeClosed.svg'
import EyeOpened from './EyeOpened.svg'
type Props = {
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  isPassword?: boolean;
}

const InputField = ({ placeholder, value, onChange, isPassword }: Props) => {

  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)

  return (
    <div className={styles.container} style={{ borderColor: focused ? '#A9DFD8' : "#fff", backgroundColor: focused ? '#fff' : "#f9f9f9" }}>
      <input className={styles.input}
        type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {isPassword && (
        <div className={styles.showPassword}
          onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? <EyeOpened color='#A9DFD8' /> : <EyeClosed color="#A9DFD8" />}
        </div>)
      }
    </div>
  )
}

export default InputField
