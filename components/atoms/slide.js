import styles from '@/styles/Slide.module.css';

export default function Slide(props) {

    return (
        <div className={styles.container}>
            <img src={props.image.url} alt={props.image.altTxt}/>
        </div>
    )
}