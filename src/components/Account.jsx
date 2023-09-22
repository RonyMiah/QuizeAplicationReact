import { Link } from 'react-router-dom';
import styles from '../components/style/Account.module.css';

function Account() {
  return (
    <>
      <div className={styles.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="signup">Signup</Link>
        {/* <span className="material-icons-outlined" title="Logout">
            {' '}
            logout{' '}
          </span> */}
      </div>
    </>
  );
}

export default Account;
