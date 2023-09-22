import styles from '../components/style/Answer.module.css';
import Checkbox from './Checkbox';
function Answer() {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="Test Answer " />
    </div>
  );
}

export default Answer;
