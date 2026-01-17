
import styles from './BurgerMenu.module.css'

interface BurgerMenuProps {
        onClick: () => void;
        isOpen?: boolean;
    }

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick, isOpen }) => {  

  return (
    <button className={styles.burgerButton} onClick={onClick}>
        <span className={`${styles.lines} ${isOpen ? styles.linesOpen : ''}`}></span>
    </button>
  )
}

export default BurgerMenu
