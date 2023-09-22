import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './style/ProgressBar.module.css';

function ProgressBar() {
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>24% Cimplete!</div>
          <div className={styles.rangeBody}>
            <div className={styles.progress} style={{ width: '20%' }}></div>
          </div>
        </div>
        <Link to="/result">
          <Button className={styles.next}>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ProgressBar;
