import styles from '../components/style/Answer.module.css';
import Checkbox from './Checkbox';
// eslint-disable-next-line react/prop-types
function Answer({ options = [], handleChange }) {
  return (
    <div className={styles.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={styles.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}

export default Answer;
