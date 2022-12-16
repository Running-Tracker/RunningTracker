import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/Script';
export default function Home() {
  
  return (
    <div className={styles.container}>
       <Head className ={styles.main}>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
            <link
          rel="stylesheet"
          href=
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <Script src=
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
        </Script>
        <Script src=
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
        </Script>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="\">Running Tracker</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a href="\" className={styles.Navtext}>Home</a></li>
              <li><a href="\profile" className={styles.Navtext}>Profile</a></li>
              <li><a href="#" className={styles.Navtext}>Team</a></li>
              <li><a href="#" className={styles.Navtext}>Races</a></li>
              <li><a href="#" className={styles.NavTextRight}>Login</a></li>
            </ul>
          </div>
        </nav>
      </Head>
      <main className={styles.main}> 
        <div class="container">
        <div class="jumbotron text-center background-color: #b08802 !important">
            <h1 className = {styles.heading}>Running Tracker</h1>
      </div>
        </div>
        <h1 className={styles.title}>
        What We Do
        </h1>
        <a className={styles.titleCard}>
            <p>Running Tracker brings running organizers, teams, and individuals together to share info on races, organize your running data, and have a more unified team to race with.</p>
          </a>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Races &rarr;</h2>
            <p>Look at a collective database of races across the area to find info on them with ease.</p>
          </a>

          <a className={styles.card}>
            <h2>Profile</h2>
            <p>Record your personal data on running, to get back statistics on where you are improving or where you need to!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Teams &rarr;</h2>
            <p>Register your team, or join a team you've been invited to and see other stats and join races together!.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Power{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
