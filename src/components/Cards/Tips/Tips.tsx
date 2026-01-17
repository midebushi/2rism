import React from 'react'

import styles from './Tips.module.css'

import Calendar from '../../Icons/Calendar/Calendar'
import User from '../../Icons/User/User'
import Comments from '../../Icons/Comments/Comments'

interface TipsProps {
    image: string,
    title: string,
    description: string,
    date: string,
    author: string,
    comments: number,
}

const Tips: React.FC<TipsProps> = ({ image, title, description, date, author, comments }) => {
  return (
    <a href='#' className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
            <div className={styles.date}>
                <Calendar/>
                <p>{date}</p>
            </div>
            <div className={styles.author}>
                <User/>
                <p>{author}</p>
            </div>
            <div className={styles.comments}>
                <Comments/>
                <p>{comments}</p>
            </div>
        </div>
    </a>
  )
}

export default Tips
