import techStacks from '../data/techStacks.json';
import styles from '@/styles/StackList.module.css';

export default function StackList(props) {
        let techStack = null;
        techStack = props.techStack.map(tech => {
            return techStacks.find((stack) => stack.name == tech);
        });

    return (
        <ul className={styles.list}>
            {techStack && techStack.map(tech =>
                <li key={tech.name} style={{backgroundColor: tech.backgroundColor}}>
                    <img src={tech.icon} alt={`The ${tech.name} icon`}/>    
                    {tech.name}</li>
            )}
        </ul>
    )
}