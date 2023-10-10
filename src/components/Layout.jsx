import { Outlet } from 'react-router-dom';
import styles from '../components/style/Layout.module.css';
import Nav from './Nav';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
