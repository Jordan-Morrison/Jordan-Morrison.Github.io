import { useState, useEffect } from 'react';
import zenScroll from 'zenscroll';
import IcomoonReact from 'icomoon-react';
import iconSet from "@/components/icons/selection.json";
import styles from '@/styles/ScrollButton.module.css';

export default function ScrollButton(props) {

    const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

    useEffect(() => {
        function updatePosition() {
            let scrollThreshold = window.innerHeight * 0.18
            if (isWelcomeScreen && window.scrollY > scrollThreshold){
                setIsWelcomeScreen(false);
            }
            else if (!isWelcomeScreen && window.scrollY < scrollThreshold){
                setIsWelcomeScreen(true);
            }
        }
        window.addEventListener("scroll", updatePosition);
        return () => window.removeEventListener("scroll", updatePosition);
    }, [isWelcomeScreen]);

    function scroll() {
        isWelcomeScreen ? zenScroll.to(props.projectScreenRef.current) : zenScroll.center(props.welcomeScreenRef.current);
    }

    return (
        <div className={isWelcomeScreen ? styles.scrollButton : `${styles.scrollButton} ${styles.top}`}>
            <IcomoonReact onClick={scroll} iconSet={iconSet} icon="chevron-down"/>
        </div>
    )
}
