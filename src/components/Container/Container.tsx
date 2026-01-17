
import styles from './Container.module.css'

import Button from '../Buttons/Button/Button'

import Arrow from '../Icons/Arrow/Arrow'



interface ContainerProps {
    title: string,
    hasButton?: boolean,
    items: React.ReactNode[],
}


const Container: React.FC<ContainerProps> = ({ title, hasButton, items }) => {
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <a href='#' className={styles.title}>{title}</a>
            {hasButton && <Button type='secondary' size='small' icon={<Arrow/>} iconPosition='right' description='View all'/>}
        </div>
        <div className={styles.items}>
            {items}
        </div>
    </div>
  )
}

export default Container
