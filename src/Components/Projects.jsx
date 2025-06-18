import styles from './Projects.module.css';
import { FaReact, FaBootstrap, FaJs, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiFlask, SiMysql, SiSolidity, SiWeb3Dotjs } from 'react-icons/si';

import portfolioImg from '../assets/projects/project.png';
import figmaImg from '../assets/projects/project.png';
import todoImg from '../assets/projects/project.png';
import gamesImg from '../assets/projects/project.png';
import dbmsImg from '../assets/projects/project.png';
import flappyImg from '../assets/projects/project.png';
import dappImg from '../assets/projects/project.png';
import beginnerImg from '../assets/projects/project.png';

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectList}>

        <div className={styles.projectCard}>
          <img src={portfolioImg} alt="Portfolio Website" className={styles.projectImage} />
          <h3>Portfolio Project</h3>
          <p>
            Designed and developed a responsive portfolio website to showcase my skills, resume, and projects. Built using React, modular CSS, and animated UI components for modern design. Deployed on GitHub Pages with smooth navigation and mobile-first layout.
          </p>
          <span className={styles.tech}>
            <FaReact /> <FaCss3Alt /> <FaJs /> <FaHtml5 />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={figmaImg} alt="Figma-to-React UI" className={styles.projectImage} />
          <h3>Figma-to-React UI</h3>
          <p>
            Translated a complex Figma design into a fully responsive web UI using React functional components. Implemented layout with Bootstrap Grid and styled components to ensure pixel-perfect fidelity. Practiced modular design and component reuse.
          </p>
          <span className={styles.tech}>
            <FaReact /> <FaBootstrap /> <FaCss3Alt />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={todoImg} alt="TODO List App" className={styles.projectImage} />
          <h3>TODO List App</h3>
          <p>
            Built a dynamic task tracker with React that supports real-time task addition, deletion, and completion toggles. Utilized state management and component-based architecture to maintain UI updates. Designed for productivity and clean UX.
          </p>
          <span className={styles.tech}>
            <FaReact /> <FaJs />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={gamesImg} alt="JavaScript Mini-Games" className={styles.projectImage} />
          <h3>JavaScript Mini-Games</h3>
          <p>
            Created interactive games like Tic-Tac-Toe, Rock-Paper-Scissors, and TRex Runner to understand game logic, event handling, and DOM manipulation. Also developed small utilities like a calculator and weather app to explore APIs and UX flow.
          </p>
          <span className={styles.tech}>
            <FaHtml5 /> <FaCss3Alt /> <FaJs />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={dbmsImg} alt="Organ Donation DBMS" className={styles.projectImage} />
          <h3>Organ Donation DBMS</h3>
          <p>
            Designed and developed a full-stack web application that manages organ donor/recipient registrations and hospital coordination. Integrated user authentication, role-based dashboards, and live status updates with MySQL backend and Flask server.
          </p>
          <span className={styles.tech}>
            <SiFlask /> <SiMysql /> <FaHtml5 /> <FaCss3Alt />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={flappyImg} alt="Flappy Bird (Java)" className={styles.projectImage} />
          <h3>Flappy Bird (Java)</h3>
          <p>
            Recreated the classic Flappy Bird game using Java Swing. Focused on UI rendering, collision detection, score tracking, and dynamically increasing difficulty. Learned object-oriented game design and Java GUI capabilities.
          </p>
          <span className={styles.tech}>
            <FaJava />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={dappImg} alt="Carpool dApp" className={styles.projectImage} />
          <h3>Carpool dApp</h3>
          <p>
            Built a decentralized carpooling platform where users can book and share rides using Ethereum smart contracts. Implemented Solidity for backend logic and Web3.js for interacting with the blockchain. Emphasized gas optimization and trustless transactions.
          </p>
          <span className={styles.tech}>
            <SiSolidity /> <SiWeb3Dotjs />
          </span>
        </div>

        <div className={styles.projectCard}>
          <img src={beginnerImg} alt="Beginner Projects" className={styles.projectImage} />
          <h3>Beginner Projects</h3>
          <p>
            Created static websites like portfolios and e-commerce templates to practice HTML5, CSS3, and Bootstrap. These helped build foundational skills in layout, styling, and responsive design. Ideal for learning semantics and design structure.
          </p>
          <span className={styles.tech}>
            <FaHtml5 /> <FaCss3Alt /> <FaBootstrap />
          </span>
        </div>

      </div>
    </div>
  );
};

export default Projects;
