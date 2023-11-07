import { useEffect } from 'react';
import zenScroll from 'zenscroll';
import IcomoonReact from 'icomoon-react';
import iconSet from "@/components/icons/selection.json";
import styles from '@/styles/ScrollButton.module.css';

export default function ScrollButton(props) {

    useEffect(() => {
        function updatePosition() {
            let scrollThreshold = window.innerHeight * 0.18
            if (props.isWelcomeScreen && window.scrollY > scrollThreshold){
                props.setIsWelcomeScreen(false);
            }
            else if (!props.isWelcomeScreen && window.scrollY < scrollThreshold){
                props.setIsWelcomeScreen(true);
            }
        }
        window.addEventListener("scroll", updatePosition);
        return () => window.removeEventListener("scroll", updatePosition);
    }, [props.isWelcomeScreen]);

    function scroll() {
        props.isWelcomeScreen ? zenScroll.to(props.projectScreenRef.current) : zenScroll.center(props.welcomeScreenRef.current);
    }

    return (
        <div className={props.isWelcomeScreen ? styles.scrollButton : `${styles.scrollButton} ${styles.top}`}>
            <IcomoonReact onClick={scroll} iconSet={iconSet} icon="chevron-down"/>
        </div>
    )
}
