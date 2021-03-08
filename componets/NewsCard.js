import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment'
import styles from "../styles/Home.module.css"
function NewsCard({ newsData }) {
    return (
        <section className={styles.card}>
            <div className={styles.newsContent}>
                <div className={styles.imageWithTitle}>
                    <div><img src={newsData.source.url} alt="newsImage" /></div>
                    <div><h6>{newsData.source.title}</h6></div>
                </div>
                <div className={styles.wifi}>
                    <FontAwesomeIcon icon={faWifi} color="#00A47C" size="lg">
                    </FontAwesomeIcon>
                </div>
            </div>
            <div className={styles.newsTitle}>
                <p>{newsData.title}</p>
            </div>
            <div className={styles.newsDate}>
                <p>{moment(newsData.created_at).format("LLLL")}</p>
            </div>
            <hr></hr>
            <div className={styles.keywords}>
                {newsData.keywords.map(keyword => <div className={styles.Keyword}
                    key={keyword._id}
                >
                    {keyword.name}
                </div>)}
                <div className={styles.secondKeyword}></div>
            </div>
        </section>
    )
}

export { NewsCard }
