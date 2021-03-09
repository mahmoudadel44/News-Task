
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
      <div className="row mt-2 justify-content-center pt-2">
      <div className="col-md-2 fixed bg-white d-none d-lg-block mt-1"></div>
        <div className="col-md-6 mt-2">
          {
            news?.map(item => (
              <NewsCard key={item._id} newsData={item} />
            ))
          }
        </div>
        <div className="col-md-2 fixed bg-white d-none d-lg-block mt-1"></div>  
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


