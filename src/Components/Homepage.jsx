// import React from 'react';
import heroimage from '../assets/about/portfolioimage2.jpg';
import styles from './Homepage.module.css'; // Make sure this path matches your CSS module file

 const Homepage=()=>{
    return(
        <section className={styles.container} id="home">
            <div className={styles.content}>
               <h1 className={styles.title}>Hi , I am Anisha 👋</h1> 
               <p className={styles.description}>Aspiring Developer | UI Enthusiast | Tech Content Creator</p>
               <a href="mailto:anishamehta0404@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={heroimage} className={styles.heroimage} alt="Anisha Mehta" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}
export default Homepage;