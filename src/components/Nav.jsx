import { Link } from 'react-router-dom';
import image from '../assets/images/logo-bg.png';
import styles from '../components/style/Nav.module.css';
import Account from './Account';

function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" className={styles.brand}>
              <img src={image} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
}

export default Nav;
