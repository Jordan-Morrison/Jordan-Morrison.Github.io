import zenScroll from 'zenscroll';
import IcomoonReact from 'icomoon-react';
import iconSet from "@/components/icons/selection.json";
import styles from '@/styles/NavButtons.module.css';

export default function NavButtons() {

    return (
        <div className={styles.container}>
            <a className={styles.navTest}>
                <IcomoonReact iconSet={iconSet} icon='github'/>
                <span className={styles.title}>Home</span>
            </a>
            <a className={styles.navTest}>
                <IcomoonReact iconSet={iconSet} icon='x'/>
                <span className={styles.title}>Portfolio</span>
            </a>
            <a className={styles.navTest}>
                <IcomoonReact iconSet={iconSet} icon='instagram'/>
                <span className={styles.title}>Experience</span>
            </a>
        </div>
    )
}
