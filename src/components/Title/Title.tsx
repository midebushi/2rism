
import styles from './Title.module.css'

import Button from '../Buttons/Button/Button'

interface TitleProps {
    children: string,
    hasButton?: boolean,
    icon?: React.ReactNode,
}

const Title: React.FC<TitleProps> = ({ children, hasButton = false, icon }) => {
  return (
    <div className={styles.head}>
            <a href='#' className={styles.title}>{children}</a>
            {hasButton && <Button type='secondary' size='small' icon={icon} iconPosition='right' description='View all'/>}
    </div>
  )
}

export default Title
