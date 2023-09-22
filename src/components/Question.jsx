import Answer from './Answer';
import styles from './style/Question.module.css';

function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answer />
    </div>
  );
}

export default Question;
