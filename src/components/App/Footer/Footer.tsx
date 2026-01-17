import React from 'react'

import styles from './Footer.module.css'

import Form from '../../Form/Form'

import Logo from '../../Icons/Logo/Logo'
import Instagram from '../../Icons/Socials/Instagram/Instagram'
import Facebook from '../../Icons/Socials/Facebook/Facebook'
import Twitter from '../../Icons/Socials/Twitter/Twitter'
import Message from '../../Icons/Message/Message'



const Footer = () => {

    const footerSocials = [
        { icon: <Facebook/>, href: '#' },
        { icon: <Twitter/>, href: '#' },
        { icon: <Instagram/>, href: '#' },
    ]

    const footerNav = [
        {   
            title: 'About', 
            items: [ 
                { name: 'About Us', link: '#' }, 
                { name: 'Features', link: '#' }, 
                { name: 'News', link: '#' }, 
                { name: 'Menu', link: '#' }, ] },
        {   
            title: 'Company', 
            items: [ 
                { name: 'Why 2rism', link: '#' }, 
                { name: 'Partner With Us', link: '#' }, 
                { name: 'FAQ', link: '#' }, 
                { name: 'Blog', link: '#' }, ] },
        {   
            title: 'Support', 
            items: [ 
                { name: 'Account', link: '#' }, 
                { name: 'Support Center', link: '#' }, 
                { name: 'Feedback', link: '#' }, 
                { name: 'Contact Us', link: '#' }, ] },
    ]

    const formItems = [
    {icon: <Message/>, label: 'Your Email', placeholder: 'johndoe@gmail.com', type: 'text'},
    ] 

  return (
    <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.outro}>
                <Logo color='black'/>
                <p className={styles.description}>We always make our customers happy by providing as many choises as possible</p>
                <ul className={styles.list}>
                    {footerSocials.map((item, index) => {
                        return (
                            <li className={styles.listItem} key={index}><a href={item.href}>{item.icon}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.navList}>
                {footerNav.map((section, index) => (
                    <div key={index} className={styles.navSection}>
                        <h4 className={styles.title}>{section.title}</h4>
                        
                        <ul className={styles.listInner}>
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={styles.navItem}>
                            <a href={item.link} className={styles.navLink}>
                                {item.name}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
            </div>
            <div className={styles.feedback}>
                <h3 className={styles.title}>Subscribe on our destination review newsletters</h3>
                <Form action='/' items={formItems} type='transparent'></Form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
