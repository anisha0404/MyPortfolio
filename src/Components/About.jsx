 import styles from './About.module.css';
import profileImg from '../assets/about/portfolioimage.jpg';

// React Icons
import { FaLaptopCode, FaReact, FaPenNib, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section className={styles.container}  id="about">
            <div className={styles.content}>
                <h1 className={styles.heading}>About Me</h1>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <img
                            src={profileImg}
                            alt="Anisha Mehta"
                            className={styles.aboutImage}
                        />
                    </div>
                    <div className={styles.right}>
                        <p className={styles.description}>
                            <FaLaptopCode className={styles.icon} />
                            Hey there! I am <strong>Anisha Mehta</strong>, a curious mind who thrives at the intersection of creativity and code. Currently a B.Tech CSE student, I’m passionate about transforming static designs into dynamic, user-focused web experiences.
                        </p>
                        <p className={styles.description}>
                            <FaReact className={styles.icon} />
                            Whether I’m diving into React components, experimenting with animations, or breaking down tech concepts into engaging content, I find joy in bringing ideas to life on the web. My approach blends precision with creativity, making every project an opportunity to craft something both functional and delightful.
                        </p>
                        <p className={styles.description}>
                            <FaPenNib className={styles.icon} />
                            Beyond the code editor, I actively share my learning journey through tech content creation and collaborative research. I believe technology is a tool to build for good, and I’m especially excited by work that supports community, education, and sustainability.
                        </p>
                        <p className={styles.description}>
                            <FaRocket className={styles.icon} />
                            Let’s build the future, one pixel and one post at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
