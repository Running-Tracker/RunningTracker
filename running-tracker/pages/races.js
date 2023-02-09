import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script';
import {useUser} from '@auth0/nextjs-auth0/client';
import Navbar from '../componenets/navbar';

const Races = ({ races }) => {
    const{user, error, isLoading} = useUser();
    const navigationBar = Navbar();
    var x = Object.keys(races).length;
    const raceList = [];
    for(var key  = 0; key < x;key++){
        raceList[key] = races[key];
    }
    const displayedRaces = displayRaces(raceList);
    return (
            <div className={styles.container}>
                <header className ={styles.header}>
                    <title>Races</title>
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
                    {navigationBar}
                </header>
                <main className={styles.main}> 
                    <div class="container">
                        <h1 className = {styles.jumbotron}>All in Run</h1>
                    </div>
                    <div>
                        <table className= {styles.racesTable}>
                            <thead >
                                <tr>
                                    <th>Race</th>
                                    <th>Organizer</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Length</th>
                                </tr>
                            </thead>
                            <tbody id = "races">
                                {displayedRaces}
                                <tr>
                                    <td>5K Race</td>
                                    <td>John Running</td>
                                    <td>01/15/2023</td>
                                    <td>123 Main Street, Somewhere, NJ</td>
                                    <td>3.1 miles</td>
                                </tr>
                                <tr>
                                    <td>10mi Race</td>
                                    <td>V-Day Memorial Run</td>
                                    <td>05/3/2023</td>
                                    <td>123 Side Street, Somethere, NJ</td>
                                    <td>10.1 miles</td>
                                </tr>
                            </tbody>
                            <Script
                                src="https://connect.facebook.net/en_US/sdk.js"
                                strategy="lazyOnload"
                                onLoad={() =>
                                    {
                                const displayedRaces = displayRaces(raceList); 
                                const button = document.createElement('button');
                                button.innerText = 'Can you click me?';
                                button.addEventListener('click', () => {
                                    location.href = "/raceForm";
                                    });
                                }}
                                    />
                        </table>
                    </div>
                        <a className={styles.card} href = "/raceForm">
                            <h2 >Teams</h2>
                            </a>
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

export async function getServerSideProps(context) {
    const races = await fetch(`http://localhost:3000/api/races`);
    const data = await races.json();
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: { races: data }
    };
}
const RaceDisplay = ({race}) => {
    let display = new Date(race.raceDate);
    return (<tr><td>{race.raceID}</td>
    <td>{race.organizerID}</td>
    <td>{display.getMonth()+1}/{display.getDate()}/{display.getFullYear()}</td>
    <td>{race.raceLocation}</td>
    <td>{race.raceLength}km</td>
    </tr>);
}
const displayRaces = ( raceArray ) => { 
    return (
      (raceArray || []).map(race => <RaceDisplay key={race.raceID} race={race} />)
    );
   }
export default Races;