import Question from './Question';
import styles from './style/Analysis.module.css';

// eslint-disable-next-line react/prop-types
function Analysis({ answer }) {
  return (
    <>
      <div className={styles.analysis}>
        <h1>Question Analysis</h1>
        <Question answer={answer} />
      </div>
    </>
  );
}

export default Analysis;
