import Question from './Question';
import styles from './style/Analysis.module.css';

function Analysis() {
  return (
    <>
      <div className={styles.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <Question />
      </div>
    </>
  );
}

export default Analysis;
