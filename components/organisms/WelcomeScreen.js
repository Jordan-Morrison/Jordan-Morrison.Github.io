import SocialLinks from '../molecules/SocialLinks';
import styles from '@/styles/WelcomeScreen.module.css';

export default function WelcomeScreen(props) {

    return (
        <div className={styles.container}>
            <img src="./images/Jordan.png" alt="Jordan Morrison's Animoji"/>
            <h1 ref={props.welcomeScreenRef}>Jordan Morrison</h1>
            <h2>Web Developer | Mobile Developer | Graphic Designer | UX & UI Designer</h2>
            <SocialLinks/>
        </div>
    )
}