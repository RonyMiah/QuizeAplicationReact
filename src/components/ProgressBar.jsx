import { useRef, useState } from 'react';
import Button from './Button';
import styles from './style/ProgressBar.module.css';

// eslint-disable-next-line react/prop-types
function ProgressBar({ next, prev, progress, submit }) {
  const [toltip, setToltip] = useState(false);
  const toltipRef = useRef();
  const toggleToltio = () => {
    if (toltip) {
      setToltip(false);
      toltipRef.current.style.display = 'none';
    } else {
      setToltip(true);
      toltipRef.current.style.left = `calc(${progress}% - 65px)`;
      toltipRef.current.style.display = 'block';
    }
  };
  return (
    <>
      <div className={styles.progressBar}>
        <div onClick={prev} className={styles.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={styles.rangeArea}>
          <div ref={toltipRef} className={styles.tooltip}>
            {progress}% Cimplete!
          </div>
          <div className={styles.rangeBody}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
              onMouseOver={toggleToltio}
              onMouseOut={toggleToltio}
            ></div>
          </div>
        </div>

        <Button
          onClick={progress === 100 ? submit : next}
          className={styles.next}
        >
          <span>{progress === 100 ? 'Submit Quize ' : 'Next Question'}</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </div>
    </>
  );
}

export default ProgressBar;
