import React from 'react'

import styles from "./HotelsNRestaurants.module.css"

import Star from '../../Icons/Star/Star'
import Map from '../../Icons/Map/Map'

interface HotelsNReastaurantsProps {
    image: string,
    title: string,
    location: string,
    rate: number,
}

const HotelsNReastaurants: React.FC<HotelsNReastaurantsProps> = ({ image, title, location, rate }) => {
  return (
    <a href='#' className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.location}>
          <Map/>
          <p className={styles.locationText}>{location}</p>
        </div>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={index < rate ? styles.starFilled : styles.starEmpty}
            >
              <Star/>
            </span>
          ))}
        </div>
    </a>
  )
}

export default HotelsNReastaurants
