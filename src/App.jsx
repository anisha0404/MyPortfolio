import styles from './App.module.css';
import Navbar from './Components/Navbar.jsx';
import Homepage from './Components/Homepage.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/Contact.jsx';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
