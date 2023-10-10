import { useMemo } from 'react';
import defaultImage from '../assets/images/success.png';
import UseFatchData from '../hooks/Context/UseFatchData';
import styles from './style/Summary.module.css';
// eslint-disable-next-line react/prop-types
function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    console.log('summary render');
    if ((score / (noq * 5)) * 100 < 50) {
      return 'failed';
    } else if ((score / (noq * 5)) * 100 < 75) {
      return 'good';
    } else if ((score / (noq * 5)) * 100 < 100) {
      return 'very good';
    } else {
      return 'excellent';
    }
  }, [score, noq]);

  const { loading, error, result } = UseFatchData(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    'GET',
    {
      Authorization: import.meta.env.VITE_REACT_APP_PIXLES_API,
    }
  );

  const image = result ? result?.photos[0].src.medium : defaultImage;

  return (
    <>
      <div className={styles.summary}>
        <div className={styles.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={styles.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>

        {loading && <div className={styles.badge}>Loading Your Batch </div>}
        {error && <div className={styles.badge}> An Error Occourd </div>}
        {!loading && !error && (
          <div className={styles.badge}>
            <img src={image} alt="Success Image Not Found" />
          </div>
        )}
      </div>
    </>
  );
}

export default Summary;
