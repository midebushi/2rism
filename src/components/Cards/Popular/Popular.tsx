import React from 'react'

import styles from './Popular.module.css'

interface PopularProps {
    image: string,
    title: string,
    location: string,
    key: number,
}

const Popular: React.FC<PopularProps> = ({ image, title, location, key }) => {
  return (
    <a className={styles.card} href='#' key={key}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{location}</p>
    </a>
  )
}

export default Popular
