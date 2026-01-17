
import styles from './List.module.css'

interface ListItem {
  name: string;
  link: string;
}

interface ListProps {
  items: ListItem[];
  isOpen: boolean;
}

const List: React.FC<ListProps> = ({ items, isOpen }) => {
  return (
    <ul className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
        {items.map((item, index) => {
            return (
            <li className={styles.listItem} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <a href={item.link} className={styles.listItemLink} target='_blank'>{item.name}</a>
            </li>)
        })}
    </ul>
  )
}

export default List
