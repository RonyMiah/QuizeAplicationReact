import Button from './Button';
import styles from './style/ProgressBar.module.css';

// eslint-disable-next-line react/prop-types
function ProgressBar({ next, prev, progress, submit }) {
  return (
    <>
      <div className={styles.progressBar}>
        <div onClick={prev} className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>{progress}% Cimplete!</div>
          <div className={styles.rangeBody}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <Button
          onClick={progress === 100 ? submit : next}
          className={styles.next}
        >
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}

export default ProgressBar;
