import styles from '../components/style/TextInput.module.css';

// eslint-disable-next-line react/prop-types
function TextInput({ ...rest }) {
  return (
    <>
      <div className={styles.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> </span>
      </div>
    </>
  );
}

export default TextInput;
