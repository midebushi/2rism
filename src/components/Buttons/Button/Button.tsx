
import styles from './Button.module.css'

interface ButtonProps {
    type: 'main' | 'secondary';
    size: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    description?: string;
}

const Button: React.FC<ButtonProps> = ({ type, description, icon, iconPosition = 'left', size }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[size]} ${styles[iconPosition]}`}>
        {icon}        
        {description && <span>{description}</span>}
    </button>
  )
}

export default Button
