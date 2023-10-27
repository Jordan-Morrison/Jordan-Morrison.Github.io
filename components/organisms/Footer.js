import IcomoonReact from "icomoon-react";
import data from '../data/socials.json';
import iconSet from "../icons/selection.json";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                {data.map(social =>
                    <a key={social.icon} target="_blank" href={social.link} aria-label={social.altTxt}>
                        <IcomoonReact iconSet={iconSet} size={16} icon={social.icon}/>
                    </a>
                )}
            </div>
            <p>Jordan Morrison &bull; 2023</p>
        </div>
    )
}