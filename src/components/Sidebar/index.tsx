import styles from './Sidebar.module.css'
import { AiOutlineUser, AiOutlineHome, AiOutlineWarning, AiOutlineContacts, AiOutlineLogout } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import SidebarItem from '../SidebarItem'


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <SidebarItem icon={<AiOutlineUser />} title='José Cosme' user />
        <SidebarItem icon={<AiOutlineHome />} title='Home' />
        <SidebarItem icon={<AiOutlineContacts />} title='Contatos' />
        <SidebarItem icon={<AiOutlineWarning />} title='Alertas' />
        <SidebarItem icon={<BsGear />} title='Configurações' />
        <SidebarItem icon={<AiOutlineLogout />} title='Sair' />
      </ul>
    </div>
  )
}

export default Sidebar
