import styles from './Sidebar.module.css'


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.listItem}>
          <span className={styles.icon}></span>
          <span className={styles.home}>Home</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.icon}></span>
          <span className={styles.home}>Home</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.icon}></span>
          <span className={styles.home}>Home</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.icon}></span>
          <span className={styles.home}>Home</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.icon}></span>
          <span className={styles.home}>Home</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
