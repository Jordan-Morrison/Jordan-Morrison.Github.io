import PortfolioItem from '../molecules/portfolioItem';
import styles from '@/styles/PortfolioGrid.module.css';

export default function PortfolioGrid(props) {

    return (
        <>
            <div className={styles.container}>
            <h3 ref={props.projectScreenRef}>Portfolio</h3>
                {props.projects.map(project =>
                    <PortfolioItem key={project.data.title} project={project}/>  
                )}
            </div>
        </>
    )
}