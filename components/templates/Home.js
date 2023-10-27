import { useRef } from 'react';
import Head from 'next/head';
import WelcomeScreen from '@/components/organisms/WelcomeScreen';
import PortfolioGrid from '../organisms/PortfolioGrid';
import styles from '@/styles/Home.module.css';
import ScrollButton from '../organisms/ScrollButton';
import Footer from '../organisms/Footer';

export default function Home(props) {

    const projectScreenRef = useRef(null);
    const welcomeScreenRef = useRef(null);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <WelcomeScreen welcomeScreenRef={welcomeScreenRef}/>
            <PortfolioGrid projects={props.projects} projectScreenRef={projectScreenRef}/>
            <ScrollButton welcomeScreenRef={welcomeScreenRef} projectScreenRef={projectScreenRef}/>
            <Footer/>
        </>
    )
}
