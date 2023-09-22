import image from '../assets/images/success.png';
import styles from './style/Summary.module.css';

function Summary() {
  return (
    <>
      <div className={styles.summary}>
        <div className={styles.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={styles.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={styles.badge}>
          <img src={image} alt="Success Image Not Found" />
        </div>
      </div>
    </>
  );
}

export default Summary;
