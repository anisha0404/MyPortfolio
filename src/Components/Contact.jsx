import styles from './Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact=()=>{
    return(
        <section className={styles.container} id="contact">
            <div className={styles.left}>
                <h1 className={styles.heading}>Contact Me</h1>
            </div>
            <div className={styles.right}>
                <p className={styles.description}>
                    If you have any questions, feedback, or just want to say hi, feel free to reach out! </p>
                    <p className={styles.description}>
                        <FaEnvelope className={styles.icon} />You can contact me via email at&emsp;
                        <a href="mailto:anishamehta0404@gmail.com" className={styles.email}>
                            anishamehta0404@gmail.com
                            </a>
                        </p>
                    
                    <p className={styles.description}>
                        <FaGithub className={styles.icon} />
                        Check out my work on&nbsp;
                        <a href="https://github.com/anisha0404" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        &emsp;GitHub
                        </a>
                    </p>
                    <p className={styles.description}>
                        <FaLinkedin className={styles.icon} />
                        Connect with me on&nbsp;
                        <a href="https://www.linkedin.com/in/anisha0404" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        &emsp;LinkedIn
                        </a>
                    </p>
                
            </div>
        </section>
    )

}
export default Contact;