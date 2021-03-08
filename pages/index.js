
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { NewsCard } from '../componets/NewsCard'
import Header from './Header'
import styles from "../styles/Home.module.css"
export default function Home({ news }) {
  React.useEffect(() => {
    console.log('news', news)
  }, [news])
  return (
    <div className={styles.container}>
      <Header />
      <div className="row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {
            news?.map((item, index) => (
              <NewsCard key={index} newsData={item} />
            ))
          }
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const response = await axios.get("http://80.240.21.204:1337/news?&limit?skip")
  const { news } = await response?.data
  return {
    props: {
      news,
    }
  }
}


// export default Home