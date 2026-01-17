import { useState } from 'react'

import styles from './Header.module.css'

import Logo from '../Icons/Logo/Logo'
import List from '../List/List'
import Profile from '../Profile/Profile'
import BurgerMenu from '../Buttons/BurgerMenu/BurgerMenu'


const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const headerLinks = [
        { name: 'home', link: '#'},
        { name: 'hotels', link: '#'},
        { name: 'restaurants', link: '#'},
        { name: 'tours', link: '#'},
        { name: 'destinations', link: '#'},
        { name: 'activities', link: '#'},
        { name: 'contact', link: '#'},
    ]

  return (
    <div className={styles.header}>
        <BurgerMenu onClick={toggleMenu} isOpen={isOpen}/>
        <a href="/"><Logo color='white'/></a>
        <List items={headerLinks} isOpen={isOpen}/>
        <Profile name='Ales Nesetril' imageUrl='./profileImage.png' isNotifications/>
    </div>
  )
}

export default Header
