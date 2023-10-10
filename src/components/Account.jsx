import { Link } from 'react-router-dom';
import styles from '../components/style/Account.module.css';
import { useAuth } from '../hooks/Context/AuthContext';

function Account() {
  const { currentUser, logOut } = useAuth();
  return (
    <>
      <div className={styles.account}>
        {currentUser ? (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span
              onClick={logOut}
              className="material-icons-outlined"
              title="Logout"
            >
              logout
            </span>
          </>
        ) : (
          <>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
          </>
        )}
      </div>
    </>
  );
}

export default Account;
