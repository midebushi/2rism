import React from 'react'

import styles from './Intro.module.css';

import Button from '../Buttons/Button/Button';
import Form from '../Form/Form';
import Global from '../Icons/Global/Global';

import Activity from '../Icons/Activity/Activity';
import Location from '../Icons/Location/Location';
import When from '../Icons/When/When';
import Guests from '../Icons/Guests/Guests';

interface IntroProps {
  children: React.ReactNode;
}

const Intro: React.FC<IntroProps> = ({ children }) => {

  const FormItems = [
    {icon: <Location/>, label: 'Location', placeholder: 'Explore nearby destinations', type: 'text'},
    {icon: <Activity/>, label: 'Activity', placeholder: 'All Activities', type: 'text'},
    {icon: <When/>, label: 'When', placeholder: 'Choose a Date', type: 'data'},
    {icon: <Guests/>, label: 'Guests', placeholder: '1 guest', type: 'text'},
  ]

  return (
    <div className={styles.intro}>
      {children}
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Discover the most engaging places</h1>
        <Button type='main' description='Discover on 3D Globe' icon={<Global/>} size='large'></Button>
      </div>
      <Form action='/' items={FormItems} type='fill'></Form>
    </div>
  )
}

export default Intro
