import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furamingo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue chez <a href="mailto:contact@furamingo.media">Furamingo Medias</a> !
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/test" className={styles.card}>
            <h3>API test &rarr;</h3>
            <p> Voir les endpoints de strapi en action </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:contact@furamingo.media"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/furamingo.svg" alt="Furamingo Medias Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
