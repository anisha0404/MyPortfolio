
import styles from './Skills.module.css';

import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaGitAlt, FaGithub, FaNetworkWired, FaTools, FaCode,
} from 'react-icons/fa';

import {
  SiC, SiMysql, SiMongodb, SiIntellijidea, SiEclipseide, SiCanva, SiFigma,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.skillGrid}>
        <div className={styles.skillCategory}>
        <h3>Languages</h3>
        <div className={styles.iconRow}>
          <FaJava title="Java" />
          <FaPython title="Python" />
          <SiC title="C" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Concepts</h3>
        <div className={styles.iconRow}>
          <FaCode title="OOP" />
          <FaCode title="DSA" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Frontend</h3>
        <div className={styles.iconRow}>
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="ReactJS" />
          <FaBootstrap title="Bootstrap" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Database</h3>
        <div className={styles.iconRow}>
          <SiMysql title="MySQL" />
          <SiMongodb title="MongoDB" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>CS Fundamentals</h3>
        <div className={styles.iconRow}>
          <FaNetworkWired title="Computer Networks" />
          <FaTools title="Operating Systems" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Version Control</h3>
        <div className={styles.iconRow}>
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Tools & IDEs</h3>
        <div className={styles.iconRow}>
          <SiIntellijidea title="IntelliJ IDEA" />
          <SiEclipseide title="Eclipse" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h3>Design & Prototyping</h3>
        <div className={styles.iconRow}>
          <SiFigma title="Figma" />
          <SiCanva title="Canva" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
