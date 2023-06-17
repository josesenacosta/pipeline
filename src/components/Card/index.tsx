import { ReactElement } from 'react';
import styles from './Card.module.css'

type Props = {
  icon: ReactElement;
  title: string;
  quantity: number;
  onClick: () => void;
  color: string;
}

const Card = ({ icon, title, quantity, onClick, color }: Props) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.iconArea}>{icon}</div>
      <div className={styles.quantityArea}><p>{quantity}</p></div>
      <div className={styles.titleArea}><p>{title}</p></div>
    </div>
  )
}

export default Card
