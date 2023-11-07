import IcomoonReact from 'icomoon-react';
import data from '../data/socials.json';
import iconSet from "../icons/selection.json";
import styles from '@/styles/SocialLinks.module.css';

export default function SocialLinks(props) {

  return (
    <div className={styles.socials}>
        {data.map(social =>
            <a key={social.icon} target="_blank" href={social.link} aria-label={social.altTxt}>
                <IcomoonReact iconSet={iconSet} icon={social.icon}/>
            </a>
        )}
    </div>
  )
}
