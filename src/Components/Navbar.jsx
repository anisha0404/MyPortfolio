// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './Navbar.module.css';
// import menuIcon from '../assets/nav/menuIcon.png';
// import closeIcon from '../assets/nav/closeIcon.png';

// const Navbarcomponent = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <NavLink className={styles.title} to="/">My Portfolio</NavLink>

//       <div className={styles.menu}>
//         <img
//           className={styles.menuBtn}
//           src={menuOpen ? closeIcon : menuIcon}
//           alt="menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />

//         <ul
//           className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
//           onClick={() => setMenuOpen(false)}
//         >
//           <li><NavLink to="/about">About</NavLink></li>
//           <li><NavLink to="/skills">Skills</NavLink></li>
//           <li><NavLink to="/projects">Projects</NavLink></li>
//           <li><NavLink to="/contact">Contact</NavLink></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbarcomponent;




import { useState } from 'react';
import styles from './Navbar.module.css';

import menuIcon from '../assets/nav/menuIcon.png';
import closeIcon from '../assets/nav/closeIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <a className={styles.title} href="#home">My Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

