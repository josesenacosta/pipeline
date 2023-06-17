import styles from './SidebarItem.module.css'
import { ReactElement } from 'react'
type Props = {
  icon: ReactElement,
  title: string,
  user?: boolean
}


const SidebarItem = ({ icon, title, user }: Props) => {
  return (
    <span className={styles.container}>
      <li className={user ? styles.user : ''}>
        <a href="">
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
        </a>
      </li>
    </span >
  )
}

export default SidebarItem
