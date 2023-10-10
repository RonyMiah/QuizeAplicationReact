import { Fragment } from 'react';
import styles from '../components/style/Answer.module.css';
import Checkbox from './Checkbox';
// eslint-disable-next-line react/prop-types
function Answer({ options = [], handleChange, input }) {
  return (
    <div className={styles.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={styles.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${styles.answer}  ${
                option.correct
                  ? styles.correct
                  : option.checked
                  ? styles.wrong
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Answer;
