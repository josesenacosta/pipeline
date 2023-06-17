import Card from '@/components/Card'
import styles from '../styles/Dashboard.module.css'
import { AiOutlineContacts, AiOutlineWarning } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'
import Sidebar from '@/components/Sidebar'

const Dashboard = () => {

  const handleClick = () => { }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.cards}>

          <Card title='Contatos Realizados' color='#E3F5FF' icon={<AiOutlineContacts />} onClick={handleClick} quantity={5} />

          <Card title='Pendências' color='#E5ECF6' icon={<AiOutlineWarning />}
            onClick={handleClick} quantity={5} />

          <Card title='Concluídos' color='#BAEDBD' icon={<BsCheckSquare />}
            onClick={handleClick} quantity={5} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
