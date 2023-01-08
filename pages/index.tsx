import Head from 'next/head'
import { Inter } from '@next/font/google'
import homeStyles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import { database } from 'firebase-functions/v1/firestore'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ allPostsData }: {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
}) => {
  return (
    <div>
      <Head>
        <title>Hyormone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Hyormone Introduction]</p>
        <p>
          (이건 웹사이트다)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>블로그</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => 
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}