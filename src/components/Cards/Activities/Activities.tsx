
import styles from './Activities.module.css'

interface ActivitiesProps {
    image: string,
    title: string,
}

const Activities: React.FC<ActivitiesProps> = ({ image, title }) => {
  return (
    <a href='#' className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.title}>{title}</h3>
    </a>
  )
}

export default Activities
