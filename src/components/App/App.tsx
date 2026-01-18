
import styles from './App.module.css'

import Intro from '../Intro/Intro'
import Header from '../Header/Header'
import Title from '../Title/Title'
import Popular from '../Cards/Popular/Popular'
import HotelsNRestaurants from '../Cards/HotelsNRestaurants/HotelsNRestaurants'
import Tips from '../Cards/Tips/Tips'
import Activities from '../Cards/Activities/Activities'
import HorizontalScroll from '../scripts/HorisontalScroll/HorisontalScroll'
import Button from '../Buttons/Button/Button'
import Footer from './Footer/Footer'

import Arrow from '../Icons/Arrow/Arrow'

const App = () => {

  const popularItems = [
    { image: './Cards/Popular/img.jpg', title: 'Big Sur', location: 'California, USA'},
    { image: './Cards/Popular/img-1.jpg', title: 'Prescott', location: 'Arizona, USA'},
    { image: './Cards/Popular/img-2.jpg', title: 'Fort Mayers', location: 'Florida, USA'},
    { image: './Cards/Popular/img-3.jpg', title: 'Tucson', location: 'Arizona, USA'},
    { image: './Cards/Popular/img-4.jpg', title: 'St. Joseph', location: 'Michigan, USA'},
    { image: './Cards/Popular/img-5.jpg', title: 'Madrid', location: 'Spain'},
  ]

  const hotelsNRestaurantsItems = [
    { image: './Cards/HotelsNRestaurants/img.jpg', title: 'Monastero Santa Rosa Hotel & Spa', location: 'Salerno, Italy', rate: 5},
    { image: './Cards/HotelsNRestaurants/img-1.jpg', title: 'Grand Hotel Tremezzo', location: 'Lake Como, Italy', rate: 3},
    { image: './Cards/HotelsNRestaurants/img-2.jpg', title: 'The Oberoi Udaivilas, Udaipur', location: 'Udaipur, India', rate: 4},
    { image: './Cards/HotelsNRestaurants/img-3.jpg', title: 'AKA Beverly Hills', location: 'Los Angeles, United States', rate: 3},
  ]

  const tipsItems = [
    { image: './Cards/Tips/img.jpg', title: 'East Village Ice Cream Craw', 
      description: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…", 
      date: 'Today', 
      author: 'Maria Philips', 
      comments: 2},
    { image: './Cards/Tips/img-1.jpg', title: 'Brooklyn Bridge cinematic photo walk', 
      description: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge.", 
      date: 'Today', 
      author: 'James Calzoni', 
      comments: 17},
  ]

  const activitiesItems = [
    { image: './Cards/Activities/img.jpg', title: 'Sailing' },
    { image: './Cards/Activities/img-1.jpg', title: 'Climbing' },
    { image: './Cards/Activities/img-2.jpg', title: 'Skiing' },
    { image: './Cards/Activities/img-3.jpg', title: 'Hiking' },
  ]

  return (
    <div>
      <Intro>
        <Header></Header>
      </Intro>
      <div className={styles.main}>
        <div className={styles.container}>
          <Title>Popular Destinations</Title>
          <HorizontalScroll className={styles.containerInner}>
            {popularItems.map((item, index) => (
                <Popular image={item.image} title={item.title} location={item.location} key={index}/>
              )
            )}
          </HorizontalScroll>
        </div>
        <div className={styles.container}>
          <Title hasButton icon={<Arrow/>}>Hotels and Restaurants</Title>
          <HorizontalScroll className={styles.containerInner}>
            {hotelsNRestaurantsItems.map((item, index) => (
                <HotelsNRestaurants image={item.image} title={item.title} location={item.location} rate={item.rate} key={index}/>
              )
            )}
          </HorizontalScroll>
        </div>
        <div className={styles.container}>
          <Title hasButton icon={<Arrow/>}>Travel Tips and Advice</Title>
          <HorizontalScroll className={styles.containerInner}>
            {tipsItems.map((item, index) => (
                <Tips image={item.image} title={item.title} description={item.description} date={item.date} author={item.author} comments={item.comments} key={index}/>
              )
            )}
          </HorizontalScroll>
        </div>
        <div className={styles.container}>
          <Title hasButton icon={<Arrow/>}>Activities</Title>
          <HorizontalScroll className={styles.containerInner}>
            {activitiesItems.map((item, index) => (
                <Activities image={item.image} title={item.title} key={index}/>
              )
            )}
          </HorizontalScroll>
        </div>
        <div className={`${styles.container} ${styles.about}`}>
          <div className={styles.aboutContent}>
            <Title>About Us</Title>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <Button type='secondary' size='small' description='Read more' icon={<Arrow/>} iconPosition='right'></Button>
          </div>
          <img src='./about.jpg' alt="About Us" className={styles.aboutImage} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
