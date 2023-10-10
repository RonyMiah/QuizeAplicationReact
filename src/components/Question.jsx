import Answer from './Answer';
import styles from './style/Question.module.css';

// eslint-disable-next-line react/prop-types
function Question({ answer = [] }) {
  return answer.map((ans, index) => (
    <div className={styles.question} key={index}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {ans.title}
      </div>
      <Answer options={ans.options}  input={false} />
    </div>
  ));
}

export default Question;
