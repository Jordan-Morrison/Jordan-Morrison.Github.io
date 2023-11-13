import { useRef, useState } from 'react';
import Head from 'next/head';
import WelcomeScreen from '@/components/organisms/WelcomeScreen';
import PortfolioGrid from '../organisms/PortfolioGrid';
import styles from '@/styles/Home.module.css';
import ScrollButton from '../organisms/ScrollButton';
import Footer from '../organisms/Footer';

export default function Home(props) {

    const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

    const projectScreenRef = useRef(null);
    const welcomeScreenRef = useRef(null);

    return (
        <div className={isWelcomeScreen ? styles.container : `${styles.container} ${styles.notWelcomeScreen}`}>
            <Head>
                <title>Jordan Morrison</title>
                <meta name="description" content="Jordan Morrison's developer portfolio, specializing in web development, mobile development, graphic, UX and UI design." />
                <meta name="theme-color" content={isWelcomeScreen ? "#E0142F" : "#23232a"}/>
            </Head>
            <WelcomeScreen welcomeScreenRef={welcomeScreenRef}/>
            <PortfolioGrid projects={props.projects} projectScreenRef={projectScreenRef}/>
            <ScrollButton isWelcomeScreen={isWelcomeScreen} setIsWelcomeScreen={setIsWelcomeScreen} welcomeScreenRef={welcomeScreenRef} projectScreenRef={projectScreenRef}/>
            <Footer/>
        </div>
    )
}
